import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div>
            <div className="register-page">
                <br/>
                <div className="container  bg-light" style={{backgroundColor:'#a9a9a9'}}>
                    <br/>
                    <div className="text-black-50 text-center mt-4">
                        <h3 >Already have an account? <Link to="/login" className="btn btn-lg btn-link text-danger">Login</Link></h3>
                    </div>

                    <div className="card mb-5 mx-5 bg-white rounded-5" style={{borderRadius:'15px'}}>
                        <div className="text-secondary text-center my-4">
                            <h5>Please insert a valid email, a verification link will be sent to your mail <br/>to complete your registration.</h5>
                        </div>

                        <form className="mb-5 needs-validation" novalidate>
                            <div className="row">
                            <div className="col-md-6">
                                
                                    <div className="col-md-10 my-2 mx-auto">
                                        <label className="form-label">First name</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-user"/>
                                        <input type="text" className="form-control" placeholder="first name" required/>
                                        </div>
                                    </div>

                                    <div className="col-md-10 my-2 mx-auto">
                                        <label className="form-label">Last name</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-user"/>
                                        <input type="text" className="form-control" placeholder="last name" required/>
                                        </div>
                                    </div>

                                    <div className="col-md-10 my-2 mx-auto">
                                        <label className="form-label">Password</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-key"/>
                                        <input type="password" className="form-control" placeholder="password" required/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    
                                        <div className="col-md-10 my-2 mx-auto">
                                            <label className="form-label">Email</label>
                                            <div className="input-group">
                                            <span className="input-group-text fa fa-envelope"/>
                                            <input type="email" className="form-control" placeholder="Email" required/>
                                            </div>
                                        </div>

                                        <div className="col-md-10 my-2 mx-auto">
                                            <label className="form-label">Mobile number</label>
                                            <div className="input-group">
                                            <span className="input-group-text fa fa-phone"/>
                                            <input type="number" className="form-control" placeholder="mobile number" required/>
                                            </div>
                                        </div>

                                        <div className="col-md-10 my-2 mx-auto">
                                            <label className="form-label">Confirm Password</label>
                                            <div className="input-group">
                                            <span className="input-group-text fa fa-key"/>
                                            <input type="password" className="form-control" placeholder="confirm your password" required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mx-auto col-md-6 mt-5">
                                        <button class="btn btn-lg btn-outline-danger px-5 rounded-pill" type="button" style={{width:'100%'}}>Register</button>
                                    </div>   
                        </div>
                            
                        </form>

                    </div>
                    <br/>
                </div>

                <br/>
            </div>
        </div>
    )
}

export default Register
