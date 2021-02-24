import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import user from '../../images/user.png'

export class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="sidebar text-center border-right border-left mb-1 d-sm-none d-md-block">
                    <br/>
                          <div className="user-profile-pic ">
                            <img src={user} alt="user" width="80px" height="80px" className="border border-secondary rounded-circle"/>
                          </div>
                          <hr className="text-white" style={{height:'5px',color:'white',}}/>
                                <Link className=" link" to="/dashboard"><span className="fa fa-dashboard"/> Dashboard</Link>
                                <Link to="/profile" className="link"><span className="fa fa-user"/> Profile</Link>
                                <Link to="/products" className="link"><span className="fa fa-tags"/> Products</Link>



                                <br/><br/>
                                <hr className="text-white" style={{height:'5px',color:'white',}}/>
                                <br/><br/><br/>

                                <Link to="/" className="btn btn-lg btn-outline-danger my-5 fa fa-sign-out"> Log out</Link>
                           
                </div>
            </div>
        )
    }
}

export default Sidebar
