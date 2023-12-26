import React,{useState} from 'react'
import "./Login.css"
import {Link,useNavigate} from "react-router-dom"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase.js"

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    

    const signIn =async e =>{
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch {
            alert("You entered a wrong username or password.");
        }
        
    }
    const register = async(e) =>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            alert("Thank you for creating Account");
            navigate("/");
        }catch(err){
           alert(err.message);
        }
       


        // auth
        //     .createUserWithEmailAndPassword(email,password)
        //     .then((auth) => {
        //         console.log(auth);
        //     })
        //     .catch(err =>alert(err.message))
        
    }
  return (
    <div className='login'>
        <Link to="/">
        <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt=""/>
        </Link>
        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e =>setEmail(e.target.value)}/>
                <h5>PassWord</h5>
                <input type='password' value={password} onChange={e =>setPassword(e.target.value)}/>

                <button type="submit" onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing in you agree to Amazon conditions
                of Use & Sale.Please see our privacy notice,our cookies notice,
                and our interest based add notice.
            </p>
            <button onClick={register}
            className='login__registerButton'>Create new Account</button>
        </div>
        
    </div>
  )
}

export default Login