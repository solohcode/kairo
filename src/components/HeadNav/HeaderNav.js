import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo3.jpg'



class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            id: window.location.pathname,
        }
    }
render(){
    const {id} = this.state
    return (
        <div className="headerNav  " style={{marginBottom:'30px'}}>
            <div className="">


                <nav id="navbar" class="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow-sm mb-5">
                <Link class="navbar-brand" to="/">
                    <img src={logo} alt="logo" width="180px" height="30px"/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item mx-3">
                        <Link class="nav-link link " to="/">Home</Link>
                    </li>
                    <li class="nav-item mx-3">
                        <Link class="nav-link link" to="/about">About</Link>
                    </li>
                    {/* <li class="nav-item  mx-3">
                    <div class="dropdown bg-light">
                        <Link class="drop-btn nav-link link">More <span class="fa fa-caret-down"/></Link>
                        <div class="dropdown-content">
                            <Link class="nav-link link" to="/createBusiness">Add business</Link>
                            <Link class="nav-link link" to="/contact">Area map</Link>
                        </div>
                    </div>
                    </li> */}
                    </ul>
                    <div class="form-inline my-2 my-lg-0 input-group mb-3 col-md-4">
                        <input type="text" class="form-control" placeholder="search a seller" aria-label="Username" aria-describedby="basic-addon1"/>
                        <span class="input-group-text fa fa-search" onClick id="basic-addon1"/>
                    </div>
                    <div class=" ml-4 ">
                        {
                            id==='/dashboard' || id==='/products' || id==='/profile' || id==='/editProfile'?'':
                        <Link to="/login" className="btn btn-lg btn-outline-danger fa fa-user"> Login</Link>
                        }
                    </div>
                </div>
                </nav>
            </div>
        </div>
    )
}
}

export default Header
