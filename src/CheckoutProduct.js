import React from 'react'
import "./CheckoutProduct.css"
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';
function CheckoutProduct(props) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket =()=>{
        //remove the item from basket
        dispatch({
            
            type: 'REMOVE_FROM_BASKET',
            
            id:props.id,
        })
    }
    
  return (
    <div className='checkout__product'>
        <img className='checkoutProduct__image' src={props.image} alt=""/>
        <div  className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{props.title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
            {Array(props.ratings).fill().map((_, i)=>(
                <p><StarIcon className='star__icon'/></p>
            ))}
            </div>
            <button onClick={removeFromBasket}>remove</button>
        </div>
    </div>
  )
}

export default CheckoutProduct