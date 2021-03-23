import React from 'react'
import m from "../images/bannerImages/b6.jpeg"

function About() {
    return (
        <div className="aboutPage">
           <div className="container">
               <br/>
               <div className="top text-center text-gray">
                   <h3>About Kairo Market</h3>
                   <hr/>
               </div>
               <div className="  d-none d-md-block">
                   <div className="row">
                    <div className=" col-4">
                        <img src={m}  alt="..." width="100%" height="100%"/>
                    </div>
                    <div className="oneCard col-8">
                        <div className="text-center border-danger">
                            <br/>
                            <span class="fa fa-vision"/>
                            <h6>Kairo market in a brief.</h6>
                            <br/>
                        </div>
                    </div>
                    </div>
               </div>
                <div className="my-3">
                    <div className="card text-center bg-light shadow rounded">
                        <h3 className="text-danger card-head my-3">About the Kairo Web application <span className="fa fa-info"/></h3>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default About
