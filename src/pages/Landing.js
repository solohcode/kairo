import React from 'react'

// components imports 
import HeaderNav from '../components/header/HeaderNav'
import HeaderMobile from '../components/header/HeaderMobile'


function Landing() {
    return (
        <div className="container-fluid landing">
            <HeaderNav/>
            <HeaderMobile/>
            <br/>
            <h1>hello from landing page</h1>
        </div>
    )
}

export default Landing
