import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
    return (
        <div>
         <div className="login-page">
                <br/>
                <div className="container  bg-light" style={{backgroundColor:'#a9a9a9'}}>
                    <br/>
                    <div className="text-black-50 text-center mt-4">
                        <h3 >You don't have an account? <Link to="/register" className="btn btn-lg btn-link text-danger">Register</Link></h3>
                    </div>

                    <div className="card mb-5 mx-5 bg-white rounded-5" style={{borderRadius:'15px'}}>
                        <div className="text-secondary text-center my-4">
                            <h5>Login below</h5>
                        </div>

                        <form className="mb-5 needs-validation" novalidate>
                            <div className="row">
                            <div className="col-md-12">
                                
                                <div class=" mx-auto">
                                    <div className="col-md-8 my-2 mx-auto">
                                        <label className="form-label">Email</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-envelope"/>
                                        <input type="email" className="form-control" placeholder="email" required/>
                                        </div>
                                    </div>

                                    <div className="col-md-8 my-2 mx-auto">
                                        <label className="form-label">Password</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-key"/>
                                        <input type="password" className="form-control" placeholder="password" required/>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center">Forgotten your password? <Link to="/forgotPassword">recover now</Link></p>
                                
                                </div>

                                <div class="mx-auto col-md-6 mt-5">
                                        <button class="btn btn-lg btn-outline-danger px-5 rounded-pill" type="button" style={{width:'100%'}}> Login</button>
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

export default Login
