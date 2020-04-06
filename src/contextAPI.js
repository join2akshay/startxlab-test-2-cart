import React, { Component } from 'react'
const CartContext=React.createContext();
export default class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this)
        this.removeItem = this.removeItem.bind(this)
        // this.logout = this.logout.bind(this)
       
        this.state = {  
            emptyCart:false,
            cart:[],
            totalPrice:0
        };
      
      }  
   

    //   login(Cart) {
    //     window.localStorage.setItem('Cart',Cart)
    //     window.localStorage.setItem('isAuth',true)
    //     this.setState(
    //        { isAuth:window.localStorage.getItem('isAuth')}
    //     )
        
    //   }
    
    //   logout() {
       
    //     window.localStorage.setItem('isAuth',true)

    //   }

    addToCart=(name,price)=>{
        console.log(typeof price)
        let cart = [...this.state.cart];
        let index=cart.findIndex(obj => obj.name == name)
        if(index===-1)
        {
            console.log('not present')
            const tempObj={};
            tempObj['name']=name;
            tempObj['price']=price;
            tempObj['orignalPrice']=price
            tempObj['qt']=1;
            
           this.state.cart.push(tempObj)
           this.setState({
               cart:this.state.cart
           })
    
        }
        else{
            let qt=this.state.cart[index].qt + 1
           let subTotal= this.subTotal(cart[index].orignalPrice,cart[index].price,qt,'plus')
           cart[index].qt=qt
           cart[index].price=subTotal
        this.setState({cart})
        }
   
       if(this.state.cart){
        this.setState({
            emptyCart:true
        })
    }
    }

    removeItem=(name)=>{
        let cart = [...this.state.cart];
        let index=cart.findIndex(obj => obj.name == name)
        let qt=this.state.cart[index].qt - 1 
        let subTotal= this.subTotal(cart[index].orignalPrice,cart[index].price,qt,'min')
           cart[index].qt=qt
           cart[index].price=subTotal
        if(qt===0)
        {
            cart.splice(index,1);
            this.setState({cart})
        }
        else{

            cart[index].qt=qt
            this.setState({cart})
        }

    }
    subTotal=(oprice,price,qt,oprator)=>{
        if(oprator==='plus')
        {
            return oprice * qt
        }
        else{
            console.log()
                return price-oprice
        }

    }

    render() {
    //  console.log(this.state.cart)
        return (
            <CartContext.Provider value={{...this.state
           ,addToCart:this.addToCart,
           removeItem:this.removeItem}}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}
const CartConsumer = CartProvider.Consumer;
export {CartProvider, CartConsumer, CartContext};