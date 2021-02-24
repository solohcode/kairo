import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="">
                    <div className="row text-center">
                    <div className="col-md-6 my-5">
                        <div className="row ">
                            <div className="col-lg-6 ">
                                <div className="footer-logo my-3 text-white">
                                    <h2><span className="text-danger fa fa-map-marker">Kairo-</span>market</h2>
                                    <small>shop easy and economy wise.</small>
                                </div>
                                <div className="footer-address text-white">
                                    <p><span className="fa fa-map text-danger"/> : 
                                    Lagos Abeokuta express way, Boladale bus stop, Oshodi Isolo local government, Lagos state.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                               <div className="footer-fnav my-3 text-white">
                                    <h4><span className="text-danger">Top-</span> Categories</h4>
                                    <ul style={{listStyle:'none'}} className="">
                                        <li className="btn-link text-white">Food</li>
                                        <li className="btn-link text-white">Clothing</li>
                                        <li className="btn-link text-white">Households</li>
                                        <li className="btn-link text-white">Fashion</li>
                                        <li className="btn-link text-white">Health</li>
                                    </ul>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="row">
                            <div className="col-lg-6">
                               <div className="footer-snav mt-3 text-white">
                                    <h4><span className="text-danger">Quick</span> Navigations</h4>
                                    <ul style={{listStyle:'none'}} className="">
                                        <li><Link to="/about" className="btn-link text-white">About the app</Link></li>
                                        <li><Link to="/contact" className="btn-link text-white">Area map</Link></li>
                                        <li><Link to="/faq" className="btn-link text-white">FAQ</Link></li>
                                        <li><Link to="/contact" className="btn-link text-white">Terms of use</Link></li>
                                    </ul>
                               </div>
                            </div>
                            <div className="col-lg-6 text-white my-3">
                                <h4><span className="text-danger">Follow</span> Us</h4>
                                <div>
                                    <p className="text-danger">Oshodi Isolo local govt</p>
                                    <a href="https://facebook.com/oshodi-isolo-lg"  rel="noopener noreferrer" target="_blank" className="text-white btn-link mx-2"><span className="fa fa-facebook-square"/></a>
                                    <a href="https://facebook.com/oshodi-isolo-lg"  rel="noopener noreferrer" target="_blank" className="text-white btn-link mx-2"><span className="fa fa-instagram"/></a>
                                    <a href="https://facebook.com/oshodi-isolo-lg"  rel="noopener noreferrer" target="_blank" className="text-white btn-link mx-2"><span className="fa fa-twitter-square"/></a>
                                </div>
                                <div>
                                    <h6 className="text-danger mt-3">Contact the developer</h6>
                                    <a href="https://techend.com.ng" className="text-white" rel="noopener noreferrer" target="_blank">techend.com.ng</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <p className="text-center text-danger">©Techend inc v-3.0 2020/2021</p>
                <br/>

                </div>
            </div>
        </div>
    )
}

export default Footer
