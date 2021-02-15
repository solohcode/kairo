import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo3.jpg'

function HeaderMobile() {
   return (
        <div className='headerMobile'>
            <div className="row">
                <div className="logoMobile col-sm-10">
                    <img src={logo} alt="logo" />
                </div>
                <div className="col-sm-2">
                    <Link to="/login"><span className="btn btn-danger">Login</span></Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile
