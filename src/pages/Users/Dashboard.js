import React,{Component} from 'react'
import { Link,Router,Route,Switch } from 'react-router-dom'

import Sidebar from '../../components/Sidebar/Sidebar'
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb'
import Cards from '../../components/Pages/Dashboard/Cards'


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
                    <div className="col-md-9 mt-5">
                        <Cards/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Dashboard
