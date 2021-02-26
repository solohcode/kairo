import React from 'react'
import { NavLink,Link, Router } from 'react-router-dom'

function Register() {
    return (
        <div>
            <br/>
            <div className="mt-5">
                <div className="container bg-secondary text-center">
                    <div className="mt-5">
                        <h3>Already have an account? <Link to="/login"> Login</Link></h3>
                    </div>
               
                   <div className="card">
                    <p>Please enter a valid E-mail Address, a mail will be sent to complete your Registration</p>
                    <div className="mt-5">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <br/>
                    <div>
                        <input type="number" placeholder="Phone no" />
                        <input type="email" placeholder="E-mail Address" />
                    </div>
                    <br/>
                    <div>
                        <input type="password" placeholder="Password" />
                        
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                    <br/>
                    <div>
                        <button>Register</button>
                    </div>
                   
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Register
