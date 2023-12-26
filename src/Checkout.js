import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal.js"
import { useStateValue } from './StateProvider.js'
import CheckoutProduct from './CheckoutProduct.js'


function Checkout() {
    const [{basket},dispatch] = useStateValue();
    const basketElement=basket.map((item) => (
                    
        
            <CheckoutProduct 
                key={item.id}
                id={item.id}
                title={item.title}
                image = {item.image}
                price = {item.price}
                ratings={item.ratings}/>
           
            
        )
        
    )
 
    console.log("Hii this basket here ...",basket);
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className="checkout__ad" src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"alt=""></img>
            <div className='checkout__title'>Shopping Basket

                {basketElement}
           
               
            </div>
        </div>
        <div className='checkout__right'>
        <Subtotal/>
           
        </div>
    </div>
  )
}

export default Checkout