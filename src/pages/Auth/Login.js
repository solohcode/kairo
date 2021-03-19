import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import{ LoginApi } from './APIs/AuthLogic'
// import { Log_in } from './APIs/AuthLogic'


export const msg = document.getElementById('msg')
const Login = ()=>{
      
    // const [ load, setLoad ] = useState(false) 
    const alert = document.getElementById("msg")
    const btn = document.getElementById("button")
    const loader = document.getElementById("loader")
    // const Log = LoginApi()

        const [data, setData] = useState({
            email:"",
            password:""
          })
    
          const handleChange=(e)=>{
              e.preventDefault()
            const {name, value} = e.target
           setData(data=>({...data, [name]:value}))
          }
        
          const handleSubmit =async(e)=>{
            e.preventDefault()
            if(data.email === "" || data.password === ""){
                alert.style.display="block"
                alert.innerText="please input necessary data."
            }else{
                loader.style.display="block"
                alert.style.display="none"
               var Log = await LoginApi(data)
                if(Log){
                    btn.innerText="please wait..."
                    if(Log.status === false){
                        loader.style.display="none"
                        btn.innerText="Login"
                        alert.style.display="block"
                        alert.innerText=Log.message
                    }else{
                        alert.style.display="block"
                    alert.className="text-center alert alert-success"
                    alert.innerText="Welcome back"
                    }
                }else{
                    alert.style.display="block"
                    alert.className="text-center alert alert-danger"
                    alert.innerText="login failed please check internet connection and try again!"
                    console.log('login failed')
                    loader.style.display="none"
                }

            }
    
          }
         
         



    return (


        <div>
         <div className="login-page">
                <br/>
                <div className="container  bg-light" style={{backgroundColor:'#a9a9a9'}}>
                    <br/>
                    <div className="text-black-50 text-center mt-4">
                        <h3 >You don't have an account? <Link to="/register" className="btn btn-lg btn-link text-danger">Register</Link></h3>
                    </div>

                    <span className=" text-center alert alert-warning" id="msg" role="alert" style={{display:'none'}}></span>
                    

                    <div className="card mb-5 mx-5 bg-white rounded-5" style={{borderRadius:'15px'}}>
                            <div class="ml-3 mt-2 float-left">
                                <span class="spinner-border" id="loader" style={{display: 'none'}} role="status"/>
                            </div>
                        <div className="text-secondary text-center my-4">
                            <h5 className="d-inline mx-3">Login below</h5>
                        </div>

                        <form className="mb-5 needs-validation" novalidate>
                            <div className="row">
                            <div className="col-md-12">
                                
                                <div class=" mx-auto">
                                    <div className="col-md-8 my-2 mx-auto">
                                        <label className="form-label">Email</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-envelope"/>
                                        <input type="email" name="email" onChange={handleChange} className="form-control" placeholder="email" required/>
                                        </div>
                                    </div>

                                    <div className="col-md-8 my-2 mx-auto">
                                        <label className="form-label">Password</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-key"/>
                                        <input type="password" name="password" onChange={handleChange} className="form-control" placeholder="password" required/>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center">Forgotten your password? <Link to="/forgotPassword">recover now</Link></p>
                                
                                </div>

                                <div class="mx-auto col-md-6 mt-5">
                                        <button onClick={handleSubmit} id="button" class="btn btn-lg btn-outline-danger px-5 rounded-pill" type="button" style={{width:'100%'}}> Login</button>
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
