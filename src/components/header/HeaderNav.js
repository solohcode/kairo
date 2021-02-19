import React from 'react'
import { NavLink,Link, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import logo from '../../images/logo3.jpg'



const Header=()=> {
    const history = createBrowserHistory()
    return (
        <div className="headerNav">
            <div className="container-fluid">
                {/* <Router history={history}>
                    <br/>
                <div className="row">
                    <div className="logo col-md-3">
                       
                    </div>
                    <div className="col-md-7">
                        <ul className="row text-center">
                            <li className="col-md-2"><NavLink to="/about" className="link float-right">About</NavLink></li>
                            <li className="col-md-2"><NavLink to="/contact" className="link float-right">Contact</NavLink></li>
                            <li className="col-md-8">
                             
                                    <input type="text" name="seller" className="" placeholder="search a seller" />
                              
                                    <span className="search-user fa fa-search" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <Link to="/login" className="float-right btn btn-lg btn-outline-danger fa fa-user"> Login</Link>
                    </div>
                </div>
                </Router>
                <br/>  */}


                <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-white">
                        <NavLink className="logo" to="/">
                            <img src={logo} alt="logo" className="" width="150px" height="30px"/>
                        </NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto text-center px-5">
                    {/* <li class="nav-item active">
                        <Link class="nav-link link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li> */}
                    <li class="nav-item">
                        <Link class="nav-link link" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link link" to="/contact">Contact</Link>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search a seller" aria-label="Search"/>
                    <span class="my-2 my-sm-0 fa fa-search search-user link" type="submit"/>
                    </form>
                    <div className="mx-3 ">
                        <Link to="/login" className="btn btn-lg btn-outline-danger fa fa-user" > Login</Link>
                    </div>
                </div>
                <hr/>

                </nav>
            </div>
        </div>
    )
}

export default Header
