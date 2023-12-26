import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,ratings}) {
  const [{basket},dispatch] = useStateValue();
  console.log("this is basket >>>>>",basket);

  const addToBasket =() =>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        ratings:ratings
      }
    });
  };

  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
                
            </p>
            <div className='product__rating'>
            {Array(ratings).fill().map((_, i)=>(
                <p><StarIcon className='star__icon'/></p>
            ))}
                
            </div>
            
        </div>
        <img src={image} alt=""></img>
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product