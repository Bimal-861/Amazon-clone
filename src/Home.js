import React from 'react'
import "./Home.css"
import Product from "./Product.js"
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className="home__image" src='https://images-eu.ssl-images-amazon.com/images/G/31/12407722031/nss/launchpad/2X_LP_PC-HERO-3000x1200_V2._CB586669980_.jpg' alt="err" />
            <div className='home__row'>
            
                <Product id={1} title="Women's Dress" price={30.33} image="https://rukminim2.flixcart.com/image/832/832/l55nekw0/kurta/6/m/e/s-oni-20-21-34-onixino-original-imagfw8xgnq9tzks.jpeg?q=70" ratings={4}/>
                <Product id={2} title="Men's Dress" price={23.67} image="https://rukminim2.flixcart.com/image/832/832/kekadu80-0/shirt/t/r/i/l-ak501-blue-martin-original-imafv7g9zmk7gtem.jpeg?q=70" ratings={3}/>
               
            </div>
            <div className='home__row'>
                <Product id={3} title="Toys" price={12.22} image="https://rukminim2.flixcart.com/image/416/416/l4rd0280/stuffed-toy/g/8/z/stuffed-toys-4-feet-pink-teddy-bear-high-quality-love-teddy-for-original-imagfhcjgczbzahq.jpeg?q=70" ratings={3}/> 
                <Product id={4} title="Electronics" price={230.34}image="https://rukminim2.flixcart.com/image/416/416/kmp7ngw0/monitor/p/b/s/s2421hn-24-kvmtc-dell-original-imagfjphb5ytsfkj.jpeg?q=70" ratings={4}/> 
                <Product id={5} title="Furniture" price={10.22}ratings={4} image="https://rukminim2.flixcart.com/image/416/416/xif0q/recliner/d/n/j/-original-imagtjkexgmrzbax.jpeg?q=70"/>
            </div>
            <div className='home__row'>
            <Product id={6} title="Mobile" price={600.34} ratings={5} image="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70"/>
            </div>
        </div>
    </div>
  )
}

export default Home