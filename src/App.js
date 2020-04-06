import React, { Component } from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Product from './components/product/product';


export default class App extends Component{
  
  render(){

    return (
      <div className="App">
      
        <Cart/>
        <Product/>
      </div>
    );
  }
  
}

