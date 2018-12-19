import React, { Component } from 'react';
import './app.scss';
import Navigation from './app/navigation/navigation';
import Product from './app/product/product';

class App extends Component {
  constructor() {
    super();

    this.state = {cart: []};

      this._addItemtoCart = item => {
        this.setState({
            ...this.state,
            cart: [
                ...this.state.cart,
                item
            ]
        })
      }
  }

  render() {
    return (
      <div className="app">
        <Navigation cart={this.state.cart}/>
        <Product title={"Classic Tee"}
                 description={"Dolor sit amet, consectetur adipiscing elit. Vivamus ex ipsum, laoreet non dignissim ac, molestie gravida nulla. Suspendisse pharetra ligula turpis, eu rhoncus ex viverra id. Fusce semper sapien id turpis ultrices, sed placerat metus finibus."}
                 sizes={["S", "M", "L"]}
                 price={"$75.00"}
                 image={"/images/classic-tee.jpg"}
                 callback={this._addItemtoCart}
        />
      </div>
    );
  }
}

export default App;
