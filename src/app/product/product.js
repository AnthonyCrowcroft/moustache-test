import './product.scss';
import {Component} from "react";
import React from "react";

class Navigation extends Component {
    /** @namespace props.title */
    /** @namespace props.description */
    /** @namespace props.sizes */
    /** @namespace props.price */
    /** @namespace props.image */
    /** @namespace props.callback */

    constructor(props) {
        super(props);


        this.state = {
            selectedSize: undefined
        };

        this._addToCart = () => {
            if (this.state.selectedSize !== undefined) {
                this.props.callback({
                    title: this.props.title,
                    price: this.props.price,
                    image: this.props.image,
                    size: this.state.selectedSize,
                });
                this.setState({...this.state, selectedSize: undefined})
            }
        };

        this._selectSize = item => {
            this.setState({
                ...this.state,
                selectedSize: item
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 product-image">
                        <img className="img-fluid" src={this.props.image} alt="classic tee"/>
                    </div>
                    <div className="col-sm-8 col-md-6 offset-lg-2 product-info">
                        <h2>{this.props.title}</h2>
                        <strong>{this.props.price}</strong>
                        <p>{this.props.description}</p>
                        <div className="size-wrapper">
                            <h5>Size<span className="required">*</span><span className="selected"> {this.state.selectedSize}</span></h5>
                            {this.props.sizes.map((item, id) => {
                                return <div key={id} className={this.state.selectedSize === item ? "btn-size selected" : "btn-size"} onClick={() => {this._selectSize(item)}}>{item}</div>
                            })}
                        </div>
                        <div className="btn btn-outline-dark" onClick={this._addToCart}>Add to Cart</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Navigation;