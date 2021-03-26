import React from 'react'
import { Link } from 'react-router-dom'
import m from "../images/bannerImages/b6.jpeg"

function About() {
    return (
        <div className="aboutPage">
           <div className="container">
               <br/>
               <div className="top my-5 text-gray">
                   <h3>About Kairo Market</h3>
                   {/* <hr/> */}
                   <div className="row">
                        <div className="col-md-3">
                            <div className="border">
                               
                               <div className="category  mb-5">
                        <div>
                               <h5 className="text-bold mt-5 text-center">Product Sales<br/> (Everything, Anything)</h5>
                               <hr/>
                        {/* <h5>Top Selling Categories</h5> */}
                        </div>
                        <div className="text-center my-5 cards row text-danger">
                            {/* <div className="col-md-3 "></div> */}
                            <div className="col-md-12 col-sm-12 sub-card">
                                <div className="py-3">
                                    <span className="icon fas fa-lemon"/>
                                    <p>Foods</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 sub-card">
                                <div className="py-3">
                                        <span className="icon fas fa-tshirt "/>
                                        <p>Wears</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 sub-card">
                                <div className="py-3">
                                        <span className=" icon fas fa-laptop "/>
                                        <p>Gadgets</p>
                                </div>                            </div>
                            <div className="col-md-12 col-sm-12 sub-card">
                                <div className="py-3">
                                    <span className=" icon fas fa-blender "/>
                                    <p>Household</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 sub-card">
                                <div className="py-3">
                                    <span className=" icon fas fa-pills "/>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 sub-card">
                                <div className="py-3">
                                    <span className=" icon fas fa-gem "/>
                                    <p>Fashion</p>
                                </div>
                            </div>
                            {/* <div className="col-md-3"></div> */}
                        </div>
                    </div>

                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="border">
                                <h6></h6>
                            </div>
                        </div>
                   </div>
               </div>
             
               
           </div>
        </div>
    )
}

export default About
