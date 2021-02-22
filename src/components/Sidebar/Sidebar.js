import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import user from '../../images/user.jpg'

export class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="sidebar">
                    <br/>
                          <div className="user-profile-pic mt-5">
                            <img src={user} alt="user" width="200px" height="150px" className="rounded-circle"/>
                          </div>
                                <Link class="active" to="/dashboard">Dashboard</Link>
                                <Link to="/profile">Profile</Link>
                                <Link to="/product">Products</Link>
                           
                </div>
            </div>
        )
    }
}

export default Sidebar
