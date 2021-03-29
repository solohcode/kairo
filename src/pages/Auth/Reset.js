import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { ResetPasswordApi } from './APIs/AuthLogic'
import { history } from '../../App'

class Reset extends Component{


     constructor(props){
         super(props)
         this.state={
          id: this.props.match.params,
          data:{ 
                email: '',
                password: '',
                password_confirmation: '',
                token: this.props.match.params.token
          }
         }
    }


     handleChange=(e)=>{
        e.preventDefault()
        const {name , value} = e.target
        const {data} = this.state
        this.setState({ data:{...data,[name]:value}})
    }

     handleSubmit= async(e)=>{
        e.preventDefault()
        const {data} = this.state
        const loader = document.getElementById('loader')
        const alert = document.getElementById('msg')
        const btn = document.getElementById('button')

        let suc="text-center alert alert-success"
        let dan="text-center alert alert-danger"

        if( data.email==="" || data.password===""){
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
                btn.innerText="Reseting..."

                const reg = await ResetPasswordApi(data)
                
                if(reg){
                    alert.style.display="none"

                    if(reg.status === true){
                        btn.innerText="Reset"
                        loader.style.display="none"
                        alert.style.display="block"
                        alert.className=suc
                        alert.innerText= reg.message
                        setTimeout(function(){
                            history.push('/login')
                        }, 2000)
                        
                    }else{
                        btn.innerText="Reset"
                        loader.style.display="none"
                        alert.style.display="block"
                        alert.className=dan
                        alert.innerText= reg.message
                    }
                }else{
                    btn.innerText="Reset"
                    loader.style.display="none"
                    alert.style.display="block"
                    alert.className=dan
                    alert.innerText="connection problem please fix!"
                }


            }

            console.log(data)

        }


        // const reg = RegisterApi(data)

        // console.log([this.state.id],[data]);

    }

render(){

    return (
        <div>
            <div className="register-page">
                <br/>
                <div className="container  bg-light" style={{backgroundColor:'#a9a9a9'}}>
                    <br/>
                    <div className="text-black-50 text-center mt-4">
                        <h3 >Reset your password</h3>
                    </div>

                    <span className=" text-center alert alert-warning" id="msg" role="alert" style={{display:'none'}}></span>

                    <div className="card mb-5 mx-5 bg-white rounded-5" style={{borderRadius:'15px'}}>
                        <div class="ml-3 mt-2 float-left">
                                <span class="spinner-border" id="loader" style={{display: 'none'}} role="status"/>
                            </div>
                        <div className="text-secondary text-center my-4">
                            <h5>Input a valid email and set up your new password.</h5>
                        </div>

                        <form className="mb-5 needs-validation" novalidate>
                            <div className="row">

                                    <div className="col-md-10 my-2 mx-auto">
                                            <label className="form-label">Email</label>
                                            <div className="input-group">
                                            <span className="input-group-text fa fa-envelope"/>
                                            <input type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Email" required/>
                                            </div>
                                        </div>
                            
                            <div className="col-md-10 mx-auto">
                                    <div className="row">
                                        <div className="col-md-6 my-2 mx-auto">
                                            <label className="form-label">Password</label>
                                            <div className="input-group">
                                            <span className="input-group-text fa fa-key"/>
                                            <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="password" required/>
                                            </div>
                                        </div>

                                        <div className="col-md-6 my-2 mx-auto">
                                            <label className="form-label">Confirm Password</label>
                                            <div className="input-group">
                                            <span className="input-group-text fa fa-key"/>
                                            <input type="password" name="password_confirmation" onChange={this.handleChange} className="form-control" placeholder="confirm your password" required/>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    {/* <div className="col-md-10 my-2 mx-auto d-none">
                                            <label className="form-label">Token</label>
                                            <div className="input-group">
                                            <span className="input-group-text fas fa-key"/>
                                            <input type="text" name="token" onChange={this.handleChange} value={this.state.id} className="form-control" placeholder="token" required/>
                                            </div>
                                        </div> */}

                                    <div class="mx-auto col-md-6 mt-5">
                                        <button class="btn btn-lg btn-outline-danger px-5 rounded-pill" id="button" onClick={this.handleSubmit} type="button" style={{width:'100%'}}>Reset</button>
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
}

export default Reset
