import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RegisterApi } from './APIs/AuthLogic'
import { history } from '../../App'

function Register() {


    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_no: '',
        password: '',
        password_confirmation: ''
    })


    const handleChange=(e)=>{
        e.preventDefault()
        const {name , value} = e.target
        setData(data=>({...data,[name]:value}))
    }

    const handleSubmit= async(e)=>{
        e.preventDefault()
        const loader = document.getElementById('loader')
        const alert = document.getElementById('msg')
        const btn = document.getElementById('button')

        let suc="text-center alert alert-success"
        let dan="text-center alert alert-danger"

        if(data.first_name==="" || data.last_name ==="" || data.email==="" || data.phone_no==="" || data.password===""){
            alert.style.display="block"
            alert.innerText="Please input your necessary datas!"
        }else{
            if(data.password !== data.password_confirmation){
                alert.style.display="block"
                alert.className=dan
                alert.innerText="password must match!"
            }else{
                alert.style.display="none"
                loader.style.display="block"
                btn.innerText="please wait..."

                const reg = await RegisterApi(data)
                
                if(reg){
                    alert.style.display="none"

                    if(reg.status === true){
                        btn.innerText="Register"
                        loader.style.display="none"
                        alert.style.display="block"
                        alert.className=suc
                        alert.innerText= reg.message
                        setTimeout(function(){
                            history.push('/login')
                        }, 5000)
                        
                    }else if(reg.email){
                        btn.innerText="Register"
                        loader.style.display="none"
                        alert.style.display="block"
                        alert.className=dan
                        alert.innerText= reg.email
                    }else{
                        btn.innerText="Register"
                        loader.style.display="none"
                        alert.style.display="block"
                        alert.className=dan
                        alert.innerText= "connection error!"
                    }
                }else{
                    btn.innerText="Register"
                    loader.style.display="none"
                    alert.style.display="block"
                    alert.className=dan
                    alert.innerText="connection problem please fix!"
                }


            }

            console.log(data)

        }


        // const reg = RegisterApi(data)

    }

    return (
        <div>
            <div className="register-page">
                <br/>
                <div className="container  bg-light" style={{backgroundColor:'#a9a9a9'}}>
                    <br/>
                    <div className="text-black-50 text-center mt-4">
                        <h3 >Already have an account? <Link to="/login" className="btn btn-lg btn-link text-danger">Login</Link></h3>
                    </div>

                    <span className=" text-center alert alert-warning" id="msg" role="alert" style={{display:'none'}}></span>

                    <div className="card mb-5 mx-5 bg-white rounded-5" style={{borderRadius:'15px'}}>
                        <div class="ml-3 mt-2 float-left">
                                <span class="spinner-border" id="loader" style={{display: 'none'}} role="status"/>
                            </div>
                        <div className="text-secondary text-center my-4">
                            <h5>Insert a valid email, a verification link will be sent to your mail.</h5>
                        </div>

                        <form className="mb-5 needs-validation" novalidate>
                            <div className="row">
                            <div className="col-md-6">
                                
                                    <div className="col-md-10 my-2 mx-auto">
                                        <label className="form-label">First name</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-user"/>
                                        <input type="text" name="first_name" onChange={handleChange} className="form-control" placeholder="first name" required/>
                                        </div>
                                    </div>

                                    <div className="col-md-10 my-2 mx-auto">
                                        <label className="form-label">Last name</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-user"/>
                                        <input type="text" name="last_name" onChange={handleChange} className="form-control" placeholder="last name" required/>
                                        </div>
                                    </div>

                                    <div className="col-md-10 my-2 mx-auto">
                                            <label className="form-label">Email</label>
                                            <div className="input-group">
                                            <span className="input-group-text fa fa-envelope"/>
                                            <input type="email" name="email" onChange={handleChange} className="form-control" placeholder="Email" required/>
                                            </div>
                                        </div>

                                    
                                </div>

                                <div className="col-md-6">
                                    

                                        <div className="col-md-10 my-2 mx-auto">
                                            <label className="form-label">Mobile number</label>
                                            <div className="input-group">
                                            <span className="input-group-text fa fa-phone"/>
                                            <input type="number" name="phone_no" onChange={handleChange} className="form-control" placeholder="mobile number" required/>
                                            </div>
                                        </div>

                                        <div className="col-md-10 my-2 mx-auto">
                                            <label className="form-label">Password</label>
                                            <div className="input-group">
                                            <span className="input-group-text fa fa-key"/>
                                            <input type="password" name="password" onChange={handleChange} className="form-control" placeholder="password" required/>
                                            </div>
                                        </div>

                                        <div className="col-md-10 my-2 mx-auto">
                                            <label className="form-label">Confirm Password</label>
                                            <div className="input-group">
                                            <span className="input-group-text fa fa-key"/>
                                            <input type="password" name="password_confirmation" onChange={handleChange} className="form-control" placeholder="confirm your password" required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mx-auto col-md-6 mt-5">
                                        <button class="btn btn-lg btn-outline-danger px-5 rounded-pill" id="button" onClick={handleSubmit} type="button" style={{width:'100%'}}>Register</button>
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
