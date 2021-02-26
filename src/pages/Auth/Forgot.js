import React from 'react'
import { Link } from 'react-router-dom'

function Forgot() {
    return (
        <div>
           <div className="register-page">
                <br/>
                <div className="container  bg-light" style={{backgroundColor:'#a9a9a9'}}>
                    <br/>
                    <div className="text-black-50 text-center mt-4">
                        <h3 >Forgot password? </h3>
                    </div>

                    <div className="card mb-5 mx-5 bg-white rounded-5" style={{borderRadius:'15px'}}>
                        <div className="text-secondary text-center my-4">
                            <h5>Input your email below to retrieve your <br/>account.</h5>
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
                                </div>
                                
                                </div>

                                <div class="mx-auto col-md-6 mt-5">
                                        <button class="btn btn-lg btn-outline-danger px-5 rounded-pill" type="button" style={{width:'100%'}}> Submit</button>
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

export default Forgot
