import React,{useState,useEffect} from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import {Link,useNavigate} from "react-router-dom"
import {CardElement, useStripe,useElements } from '@stripe/react-stripe-js';
import axios from './axios.js'


function Payment() {
    const[{basket,user},dispatch] = useStateValue();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements=useElements(true);
    const [error,setError] = useState(null);
    const [disabled,setDisabled] =useState(true);
    const [succceeded,setSucceeded] = useState(false);
    const [processing,setProcessing] = useState("");
    const [clientSecret,setClientSecret] = useState("");

    function calculate(){
        let tPrice = 0;
        for(var i=0;i<basket.length;++i){
            tPrice+=basket[i].price;
        }
        console.log(tPrice);
        return tPrice;
    }
    const totalPrice =calculate();

    // useEffect(()=>{
    //     //generate a special stripe secret which allow us to charge customer
    //     const getClientSecert = async () => {
    //         const response = await axios({
    //             method:'post',
    //             url:`/payments/create?total=${totalPrice*100}`
    //         });
    //         setClientSecret(response.data.clientSecret)
    //     }
    //     getClientSecert();
    // },[basket])

    // const handleSubmit = async e =>{
    //     e.preventDefault();
    //     setProcessing(true);
    //     const payload = await stripe.confirmCardPayment(clientSecret,{
    //         payment_method:{
    //             card:elements.getElement(CardElement)
    //         }
    //     }).then(({paymentIntent}) =>{
    //         setSucceeded(true);
    //         setError(null)
    //         setProcessing(false)
    //         navigate('/orders')
    //     })

    // }
    const handleChange = e =>{
        setDisabled(e.empty);
        setError(e.error?e.error.message:"");
    }
    
     
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

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>Checkout(<Link to="/checkout">{basket.length} items</Link>)</h1>
            <div className='payment__section'>
                <div className='payment__title'>
                        <h3>Delivery Adress</h3>
                </div>
                <div className='payment__adress'>
                    <p>{user?.email}</p>
                    <p>Basudevpur,Haldia</p>
                    <p>pin-721602</p>    
                </div>
            </div>
            <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__item'>
                        {basketElement}
                    </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    {/* <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/> */}
                        <div className='payment__priceContainer'>
                               <h3>Order Total :${totalPrice}</h3>
                               {/* <button disabled= {processing||disabled || succceeded}>
                                <span>{processing ? <p>proceessing</p>:"Buy Now"}</span>
                               </button> */}
                        </div>
                        {error && <div>{error}</div>}
                    {/* </form> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment