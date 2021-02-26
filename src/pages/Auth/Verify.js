import React from 'react'
import { Link } from 'react-router-dom'

function Verify() {
    return (
        <div>
             <div className="register-page">
                <br/>
                <div className="container  bg-light" style={{backgroundColor:'#a9a9a9'}}>
                    <br/>
                    <div className="text-black-50 text-center mt-4">
                        <h3 >Verify your email </h3>
                    </div>

                    <div className="card mb-5 mx-5 bg-white rounded-5" style={{borderRadius:'15px'}}>
                        

                        <form className="mb-5 needs-validation" novalidate>
                            <div className="row">
                             <div class="mx-auto col-md-6 mt-5">
                                        <Link to="/login" class="btn btn-lg btn-outline-danger px-5 rounded-pill" type="button" style={{width:'100%'}}> Verify email</Link>
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

export default Verify
