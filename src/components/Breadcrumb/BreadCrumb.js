import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import user from '../../images/user.png'

export class BreadCrumb extends Component {
    render() {
  const UserName = 'Westech Mill'

        return (
            <div >
                <div className="user-breadcrumb bg-light fixed-top mt-5">
                    <div className="float-left ml-4">
                        <h6 className="mt-3 link"><span className="fa fa-user text-danger"/> : {UserName}</h6>
                    </div>
                    <div className="float-right p-3">
                        <div className="">
                           <ul>
                                <li className="d-inline"><Link to="/editProfile" className="link fa fa-gears mr-3"  style={{fontSize:'25px'}}/></li>
                                <li className="d-inline"><Link to="/profile" className="display-inline link-img "><img src={user} alt="edit" width="40px" height="40px" className="rounded-circle border"/><span className="badge-success"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreadCrumb
