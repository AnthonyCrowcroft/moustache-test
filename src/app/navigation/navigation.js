import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingCart from "@fortawesome/fontawesome-pro-solid/faShoppingCart";


import './navigation.scss';

class Navigation extends Component {
    /** @namespace props.cart */

    constructor(props) {
        super(props);


        this.state = {
            cartIsOpen: false
        };

        this._toggleCartDisplay = () => {
            if(this.props.cart.length > 0) {
                this.setState({
                    ...this.state,
                    cartIsOpen: !this.state.cartIsOpen
                });
            }
        };


        this._buildDisplayCart = (cart) => {
            let  count = {};

            cart.forEach(function(i) { count[i.size] = (count[i.size]||0) + 1;});


            return this.props.cart.map((item, index) => {
                return <div className="cart-item" key={index}>
                    <img src={item.image} alt={item.title} />
                    <div className="info">
                        <span className="title">{item.title}</span>
                        <span className="price">{count[item.size]}x ${item.price}</span>
                        <span className="size">Size: {item.size}</span>
                    </div>
                </div>
            });
        }
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
                <div className="container">
                    <div className={this.state.cartIsOpen ? "ml-auto cart-wrapper open" : "ml-auto cart-wrapper"} onClick={this._toggleCartDisplay}>
                        <span className="d-none d-sm-inline-block">My Cart</span><span className="d-inline-block d-sm-none"><FontAwesomeIcon icon={faShoppingCart}/></span> ( {this.props.cart.length} )
                        <div className={this.state.cartIsOpen ? "cart-content" : "d-none"}>
                            { this._buildDisplayCart(this.props.cart)}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;