import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProfileData } from '../../../LocalStorage/Storage'
// const ProfileData = JSON.parse

export class UserProfile extends Component {
    render() {
        
        return (
            <div>
                <div className="UserProfile">
                    <div className="container-fluid">
                        <div className="UserProfile-top ">
                            <div className="text-center">
                                <h3 class="d-inline"><span className="text-danger fa fa-user"/> Your Profile</h3>
                        <Link to="/products" className="d-sm-block d-md-none d-inline mt-4 float-right btn btn-danger fa fa-shopping-cart"> Product Page</Link>
                                <hr/>
                            </div>
                            <br/>
                           

                            <div className="row">
                            <ul className="col-md-6">
                            <li className="d-inline ">
                                <img src={ProfileData.dp} alt="user" width="100px" height="100px" className="rounded-circle border"/>
                                <span className="" style={{display:ProfileData.dp===""?'block':'none'}}>plsease update your profile</span>
                            </li>
                            <li className="d-inline float-right ">
                                <div className="float-left mt-2 ">
                                <h4 className="d-block">{ProfileData.name}</h4>
                                <a href={`mailto:${ ProfileData.mail}`} target="_blank" rel="noopener noreferrer" className="text-dark d-block btn-link">{ProfileData.mail}</a>
                                <a href={`tel:${ ProfileData.phone}`} target="_blank" rel="noopener noreferrer" className="text-dark d-block btn-link">{ProfileData.phone}</a>
                                </div>
                            </li>
                            </ul>
                            <div className="col-md-6 float-right text-center">
                                <a href={`https://wa.me/${ProfileData.handle}`} target="_blank" rel="noopener noreferrer" className="m-2 btn btn-outline-danger rounded-circle"><span className=" fa fa-whatsapp"/></a>

                                    <br/>
                                <Link to='/editProfile' className="mt-4 btn btn-outline-secondary btn-lg fa fa-edit"> Edit Profile</Link>
                            </div>
                            </div>
                            <hr/>

                            <div className="row ">
                                <div className="col-md-6 border-right border-left about-you">
                                    <h4>About you</h4>
                                    {/* <hr/> */}
                                    <p className="pr-5">{ProfileData.user}.</p>
                                    <div className="text-start">
                                        <a href={`mailto:${ProfileData.mail}`} target="_blank" rel="noopener noreferrer" className="btn-link text-dark d-block" ><span className="fa fa-envelope"/> : {ProfileData.mail}</a>
                                        <a href={`mailto:${ProfileData.phone}`} target="_blank" rel="noopener noreferrer" className="btn-link text-dark d-block" ><span className="fa fa-phone"/> : {ProfileData.phone}</a>
                                    </div>
                                </div>
                                <div className="col-md-6 border-left border-right about-business">
                                    <h4>About your Business</h4>
                                    {/* <hr/> */}
                                    <h6>Business Name: <span>{ProfileData.b_name}</span></h6>
                                    {/* <hr/> */}
                                    <p className="mt-4">{ProfileData.business}.</p>
                                   
                                </div>
                            </div>

                            <hr/>
                                

                                <div className="row">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Services</h5>
                                                   
                                                    <p class="card-text">{ProfileData.service}</p>
                       
                                                </div>  
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3">
                                            <div className="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Products</h5>
                                                    
                                                    <p class="card-text">{ProfileData.product}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-sm-5">
                                            <div className="card">
                                                <div class="card-body">
                                                    {/* <h5 class="card-title">Other</h5> */}
                                                    
                                                    <b class="card-text fa fa-link">Website:<a href={`https://${ProfileData.web}`} target="_blank" rel="noopener noreferrer" class="btn btn-link "> {ProfileData.web}</a></b>
                                                   <br/>
                                                    <b class="card-text fa fa-map-marker">Address:<i class=""> {ProfileData.address}.</i></b>

                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile
