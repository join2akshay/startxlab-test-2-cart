import React, { Component } from 'react'
import {CartContext} from '../../contextAPI'
export default class Product extends Component {
    static contextType=CartContext  

    addCart=(e)=>{
        let name=e.target.dataset.name;
        let price=parseInt(e.target.dataset.price);

    this.context.addToCart(name,price)
    }
    render() {
       
        return (
            <div className='product'>
               <div className="card">
  <img src="/w3images/jeans3.jpg" alt="Denim Jeans"/>
  <h1>Tailored Jeans</h1>
  <p className="price">$10</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button onClick={this.addCart} data-name='jeans' data-price={10}>Add to Cart</button></p>
</div>
<br/>
<div className="card">
  <img src="/w3images/shirt3.jpg" alt="Denim shirt"/>
  <h1>T-shirt</h1>
  <p className="price">$15</p>
  <p>Some text about the shirt. Super slim and comfy lorem ipsum lorem shirtum. Lorem jeamsun denim lorem shirtum.</p>
  <p><button onClick={this.addCart} data-name='shirt' data-price={15}>Add to Cart</button></p>
</div>
 <div className="card">
  <img src="/w3images/Lower3.jpg" alt="Denim Lower"/>
  <h1>Lower</h1>
  <p className="price">$5</p>
  <p>Some text about the Lower. Super slim and comfy lorem ipsum lorem Lowerum. Lorem jeamsun denim lorem Lowerum.</p>
  <p><button onClick={this.addCart} data-name='lower' data-price={5}>Add to Cart</button></p>
</div>

            </div>
        )
    }
}
