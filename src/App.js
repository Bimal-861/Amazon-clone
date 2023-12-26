import React,{useEffect} from "react"
import './App.css';
import Login from './Login.js'
import Header from "./Header.js"
import Home from "./Home.js"
import Checkout from "./Checkout.js";
import {auth} from "./firebase.js"
import { useStateValue } from "./StateProvider.js";
import Payment from "./Payment.js"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const promise  = loadStripe("pk_test_51OR0K5SA68AVWTkIhIjKLuXNAKrFbz6ym2ANg9YHnxQTvKmue88X1iazP9gRXKKQMNs2dhg4TuxXHJoQ41XpxAeG00XcJ8aRci");

function App() {
  const [{basket,user},dispatch] = useStateValue();
  // useEffect(() =>{
  //   //will only run once when the app componenet will loads
  //     auth.onAuthStateChanged(authUser =>{

  //       if(authUser){
  //         //the user is logged in or was logged in
  //         dispatch({
  //           type:'SET_USER',
  //           user:authUser
  //         })
  //       }else{
  //         //the user is logged out
  //         dispatch({
  //           type:'SET_USER',
  //           user:null
  //         })
  //       }

  //     })
  
  // },[])
  return (
    <Router>
      <Routes>
      <Route path="/" element={<div className="app">  
            <Header/>
            <Home/>  
      </div>}></Route>
      </Routes>
      <Routes>
      <Route path="/checkout" 
        element={
          <div className="app">  
                <Header/>
                <Checkout/>
          </div>}>
            
      </Route>
      </Routes>
      <Routes>
      <Route path="/payment" 
        element={
          <div className="app">  
                <Header/>
                <Elements stripe={promise}>
                <Payment/>
                </Elements>
                
          </div>}>
            
      </Route>
      </Routes>
      <Routes>
      <Route path="/login" element={
          <Login/>
        }>   
      </Route>
      </Routes>
      
      
      
    </Router>
    
  );
}

export default App;
