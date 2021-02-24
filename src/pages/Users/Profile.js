import React,{Component} from 'react'

// component imports  
import Sidebar from '../../components/Sidebar/Sidebar'
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb'
import UserProfile from '../../components/Pages/Profile/UserProfile'

class Profile extends Component{
    render(){
    return (
        <div>
            <div className="mt-5">
                        <BreadCrumb/>
                </div>
           <div className="profile-page mt-big">
                <div className="container-fluid">
                    
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar/>
                        </div>
                        <div className="col-md-9">
                            <UserProfile/>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
    }
}

export default Profile
