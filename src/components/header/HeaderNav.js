import React from 'react'
import { NavLink,Link, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import logo from '../../images/logo3.jpg'



const Header=()=> {
    const history = createBrowserHistory()
    return (
        <div className="headerNav">
            <div className="container-fluid">
                <Router history={history}>
                    <br/>
                <div className="row">
                    <div className="logo col-md-3">
                        <NavLink className="logo-circle" to="/">
                            <img src={logo} alt="logo" className=""/>
                        </NavLink>
                    </div>
                    <div className="col-md-7">
                        <ul className="row text-center">
                            <li className="col-md-2"><NavLink to="/about" className="link float-right">About</NavLink></li>
                            <li className="col-md-2"><NavLink to="/contact" className="link float-right">Contact</NavLink></li>
                            <li className="col-md-8">
                                {/* <div className="row"> */}
                                {/* <div className="col-md-11"> */}
                                    <input type="text" name="seller" className="" placeholder="search a seller" />
                                {/* </div> */}
                                {/* <div className="col-md-1"> */}
                                    <span className="search-user fa fa-search" />
                                {/* </div> */}
                                {/* </div> */}
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <Link to="/login" className="float-right btn btn-lg btn-outline-danger fa fa-user"> Login</Link>
                    </div>
                </div>
                </Router>
                <br/>
            </div>
        </div>
    )
}

export default Header
