import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import {auth} from "./firebase.js"
function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }
  return (
    <>
        <div className='header'>
            <Link to="/">
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt='err'/>
            </Link>
            
            <div className='header__search'>
                <input className='header__searchInput' type="text"/>
                <SearchIcon className='header__searchIcon'/>
            </div>
            <div className='header__nav'>
                <Link to={!user && '/login'}>
                <div    onClick={handleAuthentication} 
                    className='header__option'>
                    <span className='header__optionLineOne'>Hello {!user?'Guest':{user}}</span>
                    <span className='header__optionLineTwo'>{user?'Sign Out':'Sign In'}</span>
                </div>
                </Link>
                
                <div className='header__option'>
                    <span className='header__optionLineOne'>Return</span>
                    <span className='header__optionLineTwo'>&Order</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to="/checkout">
                <div className='header__OptionBasket'>
                    <ShoppingCartIcon className='shopping__cart'/><span className='header__optionLineTwo header__basketCount'>{basket.length}</span> 
                </div>
                </Link>
                
                

            </div>
        </div>
        
    </>
    

  )
}

export default Header