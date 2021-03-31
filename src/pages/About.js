import React from 'react'
import { Link } from 'react-router-dom'
import m from "../images/bannerImages/b6.jpeg"

function About() {
    return (
        <div className="aboutPage">
           <div className="container">
               <br/>
               <div className=" top my-5 text-gray">
                   <h3 className="text-center">About Kairo Market <i className="fa fa-info"/></h3>
                   <hr/>
                   <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                               
                    <div className="category d-none d-md-block  mb-5">
                        <div>
                               <h5 className=" mt-3 text-center text-gray" style={{color:'gray'}}>Major Sales</h5>
                               <hr/>
                        {/* <h5>Top Selling Categories</h5> */}
                        </div>
                        <div className="text-center  cards row text-danger">
                            {/* <div className="col-md-3 "></div> */}
                            <div className="col-md-12 col-sm-12 ">
                                <div className="py-2">
                                    <span className="icon fas fa-lemon"/>
                                    <p>Foods</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="py-2">
                                        <span className="icon fas fa-tshirt "/>
                                        <p>Wears</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="py-2">
                                        <span className=" icon fas fa-laptop "/>
                                        <p>Gadgets</p>
                                </div>                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="py-2">
                                    <span className=" icon fas fa-blender "/>
                                    <p>Household</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="py-2">
                                    <span className=" icon fas fa-pills "/>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="py-2">
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
                            <div className="">
                                <div className="">
                                    <h5 className="my-4" style={{color:'gray'}}>Kairo in a brief</h5>
                                      <div className="row">
                                        <div className="col-md-5">
                                            <p>Kairo market is a local general purpose market located at oshodi isolo local government.
                                                <br/> 
                                                It is a market where products of different categories are sold both consumeables and unconsumeables in pieces and also in bulk.
                                                 </p>
                                        </div>
                                        <div className="col-md-2">
                                            {/* <p>Kairo market is a local general purpose market located at oshodi isolo local government </p> */}
                                        </div>
                                        <div className="col-md-5">
                                            <b className="mt-5" style={{color:'gray'}}>kairo market is located at <span className="fa fa-map-marker"/>:</b>
                                            <p>boladale bus station BRT terminal 1 ahead of the oshodi ikorodu mary land express road,
                                                <br/> oshodi isolo local government oshodi lagos state.  </p>
                                        </div>

                                        <hr/>

                                        <div className="">
                                                <h5 className="my-4" style={{color:'gray'}}>About the application</h5>
                                                <p>
                                                    The kairo market web and mobile application is a mini e-commerce apllication that holds market sellers details and the products available for sales in the market,
                                                    <br/>
                                                    it was built to relieve visiting buyers of the market the stress of roaming about the market in search of the products they want to buy and to compare the prices and also to know the precise location of the seller of the particular product of choice.
                                                </p>
                                                <p>
                                                    The idea of the apllication was established by the local government committee to ease the stress of buyers and to improve the sales of the sellers in the market.
                                                </p>
                                        </div>
                                      </div>
                                </div>
                            </div>
                        </div>
                   </div>

               </div>
             
               
           </div>
           <br/>
        </div>
    )
}

export default About
