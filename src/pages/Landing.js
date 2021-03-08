import React from 'react'

// // components imports 
// import HeaderNav from '../components/Header/HeaderNav'
// import HeaderMobile from '../components/Header/HeaderMobile'

import Demo from '../components/Pages/Landing/Demo'
import Products from '../components/Pages/Products/RandomProducts'
import SearchProduct from '../components/Pages/Products/SearchProduct'


// const Product = setTimeout(function(){ <Products/> },3000) 

function Landing() {
   
    return (
        <div className="">
            <Demo/>
            {/* <SearchProduct/> */}
            <Products/>
          
        </div>
    )
}

export default Landing
