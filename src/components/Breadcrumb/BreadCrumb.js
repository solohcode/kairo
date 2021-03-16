import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { ProfileData } from '../../LocalStorage/Storage'

export class BreadCrumb extends Component {
    
    render() {
        

        return (
            <div >
                <div className="user-breadcrumb bg-light fixed-top mt-5">
                    <div className="float-left ml-4">
                        <Link to="/dashboard" class="link"><h6 className="mt-3 link"><span className=" text-danger"/><b className="fa fa-user text-danger"/> : {ProfileData.name}</h6></Link>
                    </div>
                    <div className="float-right p-3">
                        <div className="">
                           <ul>
                                <li className=" d-inline"><Link to="/editProfile" className="d-none d-md-inline link fa fa-gears mr-3"  style={{fontSize:'25px'}}/></li>
                                <li className="d-inline"><Link to="/profile" className="display-inline link-img "><img src={ProfileData.dp} alt="edit" width="40px" height="40px" className="rounded-circle border"/><span className="badge-success"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreadCrumb
