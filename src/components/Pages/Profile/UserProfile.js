import React, { Component } from 'react'

import user from '../../../images/user.png'

export class UserProfile extends Component {
    render() {
        const mail ='westechmill@gmail.com'
        const phone ='+2348056343370'
        return (
            <div>
                <div className="UserProfile">
                    <div className="container-fluid">
                        <div className="UserProfile-top mt-2">
                            <div className="text-center">
                                <h3><span className="text-danger fa fa-user"/> User Profile</h3>
                                <hr/>
                            </div>
                           

                            <div className="row">
                            <ul className="col-md-6">
                            <li className="d-inline ml-3">
                                <img src={user} alt="user" width="100px" height="100px" className="rounded-circle border"/>
                            </li>
                            <li className="d-inline float-right ">
                                <div className="float-left mt-2 mr-5">
                                <h4 className="d-block">Westech Mills</h4>
                                <a href={`mailto:`& mail} className="text-dark d-block btn-link">{mail}</a>
                                <a href={`mailto:`& phone} className="text-dark d-block btn-link">{phone}</a>
                                </div>
                            </li>
                            </ul>
                            <div className="col-md-6 float-right text-center">
                                <a href="" className="m-2 btn btn-outline-danger rounded-circle"><span style={{width:"15px"}} className=" fa fa-facebook"/></a>
                                <a href="" className="m-2 btn btn-outline-danger rounded-circle"><span className=" fa fa-whatsapp"/></a>
                                <a href="" className="btn btn-outline-danger rounded-circle"><span className=" fa fa-twitter"/></a>
                            </div>
                            </div>
                            <hr/>

                            <div className="row text-center">
                                <div className="col-md-6 border-right border-left">
                                    <h4>About you</h4>
                                    <hr/>
                                    <p>Westhech mill is a fullstack developer, a graphics and a UI/UX designer and a music producer.</p>

                                </div>
                                <div className="col-md-6 border-left border-right">
                                    <h4>About your Business</h4>
                                    <hr/>
                                    <h6>Business Name: <span>WESTECH INVESTMENT</span></h6>
                                    <hr/>
                                    <p>Westhech investment org is an organization that is specialized in web development and graphics and a UI/UX designer and also music production.</p>
                                    
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
