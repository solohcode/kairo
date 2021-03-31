import React, { useState } from 'react'
import { forgotPasswordApi } from '../Auth/APIs/AuthLogic'

function Forgot() {

    const [data, setData] = useState({
        email:''
    })

   const handleChange = (e)=>{
        e.preventDefault()
        const {name, value} = e.target
        setData(data=>({...data, [name]:value}))
    }

    const handleSubmit =async ()=>{
        const msg = document.getElementById('msg')
        const load = document.getElementById('loader')
        const btn = document.getElementById('btn')


        if(data.email == ""){
            msg.style.display="block"
            msg.innerText="Input box cannot be empty please input email!"
        }else{
            load.style.display="block"
            msg.style.display="none"
            btn.innerText="Submitting.."
            const fog = await forgotPasswordApi(data)
            
            if(fog.status == 'true'){
                load.style.display="none"
                btn.innerText="Submit"
                msg.style.display="block"
                msg.className="text-center alert alert-success"
                msg.innerText=fog.message
            }else{
                load.style.display="none"
                btn.innerText="Submit"
                msg.style.display="block"
                msg.className="text-center alert alert-danger"
                msg.innerText=fog.message 
            }
            // msg.style.display="block"
            // msg.className="text-center alert alert-danger"
            // msg.innerText="connection obstructed!"

        }
    }

    return (
        <div>
           <div className="register-page">
                <br/>
                <div className="container  bg-light" style={{backgroundColor:'#a9a9a9'}}>
                    <br/>
                    <div className="text-black-50 text-center mt-4">
                        <h3 >Forgot password? </h3>
                    </div>

                    <span className=" text-center alert alert-warning" id="msg" role="alert" style={{display:'none'}}></span>

                    <div className="card mb-5 mx-5 bg-white rounded-5" style={{borderRadius:'15px'}}>
                            <div class="ml-3 mt-2 float-left">
                                <span class="spinner-border" id="loader" style={{display: 'none'}} role="status"/>
                            </div>
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
                                        <input type="email" name="email" onChange={handleChange} className="form-control" placeholder="email" required/>
                                        </div>
                                    </div>
                                </div>
                                
                                </div>

                                <div class="mx-auto col-md-6 mt-5">
                                        <button onClick={handleSubmit} class="btn btn-lg btn-outline-danger px-5 rounded-pill" id="btn" type="button" style={{width:'100%'}}> Submit</button>
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
