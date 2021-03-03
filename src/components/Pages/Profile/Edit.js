import React, { Component } from 'react'
import user from '../../../images/user.png'
import { ProfileData } from '../../../LocalStorage/Storage'

export class Edit extends Component {
    render() {
        return (
            <div>
                <div>
                

                    <div className="text-center">
                    <h3 className="text-secondary"><span className="fas fa-user-edit text-danger"/> Edit your profile</h3>
                    <hr/>

                    <div className="row ">
                        <div className="col-6 text-center">
                            <img src={ProfileData.dp} alt="user" width="60px" height="60px" className="float-left border border-secondary rounded-circle"/>
                        </div>
                        <div className="col-6 mt-2">
                            <div class="input-group mb-3 mx-auto">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Upload image</span>
                            </div>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile01"/>
                                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div>
                        <h4>Personal Information</h4>
                        <hr/>
                    <div className="row">
                        <div className="col-md-4">
                                    <div className="mx-auto">
                                        <label className="form-label">First Name</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-user"/>
                                        <input type="text" className="form-control" placeholder="first name"/>
                                        </div>
                                    </div>

                                    <div className="mx-auto">
                                        <label className="form-label">Last Name</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-user"/>
                                        <input type="text" className="form-control" placeholder="last name"/>
                                        </div>
                                    </div>
                        </div>

                        <div className="col-md-4">
                                    
                                    <div className="mx-auto">
                                        <label className="form-label">E-mail</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-envelope"/>
                                        <input type="email" className="form-control" placeholder="email"/>
                                        </div>
                                    </div>

                                    <div className="mx-auto">
                                        <label className="form-label">Mobile Number</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-phone"/>
                                        <input type="number" className="form-control" placeholder="mobile number"/>
                                        </div>
                                    </div>
                        </div>

                        <div className="col-md-4">
                                 <div className="mx-auto">
                                        <label className="form-label">Social Handle</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-whatsapp"/>
                                        <input type="text" className="form-control" placeholder="social handles or links"/>
                                        </div>
                                    </div>

                                    <div className="mx-auto">
                                        <label className="form-label">About you</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-info"/>
                                        <textarea height="10px" type="text" className="form-control" placeholder="about you in short note"/>
                                        </div>
                                    </div>
                        </div>
                    </div>
                    </div>

                   {/* <hr/> */}

                    <div>
                        <h4>Business Information</h4>
                        <hr/>
                        <div className="row">
                        <div className="col-md-4">
                                    <div className="mx-auto">
                                        <label className="form-label">Business Name</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-certificate"/>
                                        <input type="text" className="form-control" placeholder="business name"/>
                                        </div>
                                    </div>

                                    <div className="mx-auto">
                                        <label className="form-label">Services</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-gears"/>
                                        <input type="text" className="form-control" placeholder="services"/>
                                        </div>
                                    </div>
                        </div>

                        <div className="col-md-4">
                                    
                                    <div className="mx-auto">
                                        <label className="form-label">Products</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-tags"/>
                                        <input type="text" className="form-control" placeholder="products"/>
                                        </div>
                                    </div>

                                    <div className="mx-auto">
                                        <label className="form-label">Website Url</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-link"/>
                                        <input type="text" className="form-control" placeholder="website link"/>
                                        </div>
                                    </div>
                        </div>

                        <div className="col-md-4">
                                 <div className="mx-auto">
                                        <label className="form-label">Address</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-map-marker"/>
                                        <input type="text" className="form-control" placeholder="address location"/>
                                        </div>
                                    </div>

                                    <div className="mx-auto">
                                        <label className="form-label">About Business</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-info"/>
                                        <textarea type="text" className="form-control" placeholder="about your business in short note"/>
                                        </div>
                                    </div>
                        </div>
                    </div>
                    </div>
                        <div className="col-md-12">
                            <button className="btn btn-danger mx-auto">Update</button>
                        </div>
                </div>
                </div>
        )
    }
}

export default Edit
