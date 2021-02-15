import React from 'react'
import { NavLink,Link, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import logo from '../../images/logo3.jpg'



const Header=()=> {
    const history = createBrowserHistory()
    return (
        <div className="container-fluid headerNav ">
            <Router history={history}>
                <br/>
            <div className="row">
            <div className="logo col-md-4">
                <NavLink to="/">
                    <img src={logo} alt="logo" className=""/>
                </NavLink>
            </div>
            <div className="col-md-8">
                <ul className="row text-center">
                    <li className="col-md-2"><NavLink to="/about" className="link">About</NavLink></li>
                    <li className="col-md-8">
                        <div className="row">
                        <div className="col-md-11">
                            <input type="text" name="seller" className="" placeholder="search a seller" />
                        </div>
                        <div className="col-md-1">
                            <span className="fa fa-search" />
                        </div>
                        </div>
                    </li>
                    <Link to="/login" className="float-right btn btn-lg btn-outline-danger fa fa-user"> Login</Link>
                </ul>
            </div>
            </div>
            </Router>
        </div>
    )
}

export default Header
