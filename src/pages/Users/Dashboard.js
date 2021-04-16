import React,{Component} from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb'
import Cards from '../../components/Pages/Dashboard/Cards'
import { ProfileData } from '../../LocalStorage/Storage'
import { Link } from 'react-router-dom'



class Dashboard extends Component{
    
    render(){
    return (
        <div>
               <BreadCrumb/>
            <div className="dashboard mt-big">
               
             
            <div className="container-fluid ">
              
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                        { ProfileData && ProfileData.pp?'':
                        <div className="alert alert-warning text-center">
                            <Link to="/editProfile" className="text-secondary">please update your profile <i className="fa fa-long-arrow-right"/></Link>
                        </div>
                        }
                        <div className="mt-3">
                            <Cards/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Dashboard

