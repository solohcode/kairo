import React, { Component } from 'react'
import user from '../../../images/user.png'

export class Edit extends Component {
    render() {
        return (
            <div>
                <div>
                

                    <div className="text-center">
                    <h3 className="text-secondary"><span className="fas fa-user-edit text-danger"/> Edit your profile</h3>
                    <hr/>
                    <div className="user-profile-pic">
                        <img src={user} alt="user" width="80px" height="80px" className="border border-secondary rounded-circle"/>
                        <input type="file" />
                    </div>
                    </div>
                    <br />
                    <div>
                        <h2>Personal Information</h2>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label>First Name</label><br/>
                            <input type="text" class="form-control" />
                            <br/>
                            <label>About you</label><br/>
                            <input type="text" class="form-control" />
                            <br/>
                            <label>Phone Number</label><br/>
                            <input type="number" class="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Last Name</label><br/>
                            <input type="text" class="form-control" />
                            <br/>
                            <label>E-mail</label><br/>
                            <input type="email" class="form-control" />
                            <br/>
                            <label>Social Handle</label><br/>
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <br/>
                    <div>
                        <h2>Business Information</h2>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label>Business Name</label><br/>
                            <input type="text" class="form-control" />
                            <br/>
                            <label>Services</label><br/>
                            <input type="text" class="form-control" />
                            <br/>
                            <label>Address</label><br/>
                            <input type="text" class="form-control" />
                            <br/>
                            <button className="btn btn-danger">Update</button>
                        </div>  
                        <div className="col-6">
                            <label>About Business</label><br/>
                            <input type="text" class="form-control" />
                            <br/>
                            <label>Products</label><br/>
                            <input type="text" class="form-control" />
                            <br/>
                            <label>Business Website</label><br/>
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <br/>
                   

                    
                    
                    <br/>
                </div>
                </div>
        )
    }
}

export default Edit
