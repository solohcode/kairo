import React from 'react'
import { Link } from 'react-router-dom'
import m from "../images/bannerImages/b6.jpeg"

function About() {
    return (
        <div className="aboutPage">
           <div className="container">
               <br/>
               <div className="top text-center text-gray">
                   <h3>About Kairo Market</h3>
                   <hr/>
                   <Link to="/reset-password/">reset password</Link>
               </div>
             
               
           </div>
        </div>
    )
}

export default About
