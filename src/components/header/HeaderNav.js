import React from 'react'
import { NavLink,Link, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import logo from '../../images/logo3.jpg'



const Header=()=> {
    const history = createBrowserHistory()
    return (
        <div className="headerNav">
            <div className="container-fluid">
               


                <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">
                    <img src={logo} alt="logo" width="180px" height="30px"/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item mx-3">
                        <Link class="nav-link link active" to="/">Home</Link>
                    </li>
                    <li class="nav-item mx-3">
                        <Link class="nav-link link" to="/about">About</Link>
                    </li>
                    <li class="nav-item mx-3">
                        <Link class="nav-link link" to="/createBusiness">Add business</Link>
                    </li>
                    <li class="nav-item mx-3">
                        <Link class="nav-link link" to="/contact">Area map</Link>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search a seller" aria-label="Search"/>
                    <span class="fa fa-search my-2 my-sm-0 link" type="submit"/>
                    </form>
                    <div>
                        <Link to="/login" className="btn btn-lg btn-outline-danger fa fa-user mx-5"> Login</Link>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
