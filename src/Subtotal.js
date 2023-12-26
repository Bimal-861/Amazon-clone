import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
// import { getBasketTotal } from './Reducer';
import {useNavigate} from "react-router-dom"

function Subtotal() {

    const navigate = useNavigate();
    function handleClick(){
        navigate("/payment")
    }


    const [{basket},dispatch] = useStateValue();
    function calculate(){
        let tPrice = 0;
        for(var i=0;i<basket.length;++i){
            tPrice+=basket[i].price;
        }
        console.log(tPrice);
        return tPrice;
    }
    const totalPrice = calculate();
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText ={(value) =>(
                <>
                    <p>Subtotal ({basket.length} items):<small>$</small><strong>{totalPrice}</strong></p>
                    <small className='subtotal__gift'><inpute type="checkbox"/>This order contains a gift</small>
                </>
                
            )}

            decimalScale={2}
            value={0}
            displayType={'text'}
            thousandSeparator={true}
            prefix={"$"}
        /> 
        <button onClick ={handleClick}>proceed</button>  

    </div>
  )
}

export default Subtotal