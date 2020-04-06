import React, { Component } from 'react'
import {CartContext} from '../../contextAPI'

export default class Cart extends Component {
    static contextType=CartContext
    state={
        emptyCart:this.context.emptyCart
    }
    displayItem=(item)=>{
        return (
            <>
            <div className='product-detail mg-20'>
                <p className='item-name mg-20'>{item.name}</p>
                <p className='item-price mg-20'>{item.price}</p>
                <p className='item-qt mg-20'>{item.qt}</p>
                <br/>
                
            </div>
                <div className='btn'>
                <p className='min mg-20' onClick={this.removeCart} data-name={item.name} data-price={item.price}>-</p>
                <p className='plus mg-20' onClick={this.addCart} data-name={item.name} data-price={item.price}>+</p>
                </div>
                </>
        )

    }

    addCart=(e)=>{
        let name=e.target.dataset.name;
        let price=e.target.dataset.price;

    this.context.addToCart(name,price)
    }
    removeCart=(e)=>{
        let name=e.target.dataset.name;
        let price=e.target.dataset.price;

    this.context.removeItem(name,price)
    }
    render() {
      let emptyCart= this.context.emptyCart
   
        return (
            <div className='cart'>

            {
                    emptyCart ? 
                    (
                        <div>
                        <div className='product-detail'>
                <p className='item-name mg-20'>name</p>
                <p className='item-price mg-20'>price</p>
                <p className='item-qt mg-20'>qt.</p>
                
                
            </div>
                            {this.context.cart.map((item)=>{
                               return this.displayItem(item)
                            })}
                        </div>
                    )
                    :
                    (
                            <p>no value in cart</p>
                    )

            }
            </div>
        )
    }
}
