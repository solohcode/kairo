import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { VerifyApi } from './APIs/AuthLogic'
import { history } from '../../App'

class Verify extends Component {

    constructor(props){
        super(props)
        this.state= {id: this.props.match.params.id}
        
    }

    handleVerify=async(e)=>{
        e.preventDefault()
    const loader = document.getElementById('loader')
    const alert = document.getElementById('msg')
    const btn = document.getElementById('button')

    let suc="text-center alert alert-success"
    let dan="text-center alert alert-danger"

        loader.style.display="block"
        btn.innerText="please wait.."
        const ver = await VerifyApi(this.state.id)

        if(ver.status === true){
            loader.style.display="none"
            btn.innerText="Verify email"
            alert.style.display="block"
            alert.className=suc
            alert.innerText=ver.message+" you can now login to your account"

            setTimeout(function(){
                history.push('/login')
            },5000)
        }else{
            loader.style.display="none"
            btn.innerText="Verify email"
            alert.style.display="block"
            alert.className=dan
            alert.innerText=ver.message
        }
    }
    
    render(){
        
    return (
        <div>
             <div className="register-page">
                <br/>
                <div className="container  bg-light" style={{backgroundColor:'#a9a9a9'}}>
                    <br/>
                    <div className="text-black-50 text-center mt-4">
                        <h3 >Verify your email </h3>
                    </div>

                    <span className=" text-center alert alert-warning" id="msg" role="alert" style={{display:'none'}}></span>

                    <div className="card mb-5 mx-5 bg-white rounded-5" style={{borderRadius:'15px'}}>
                        
                    <div class="ml-3 mt-2 float-left">
                                <span class="spinner-border" id="loader" style={{display: 'none'}} role="status"/>
                            </div>

                        <form className="mb-5 needs-validation" novalidate>
                            <div className="row">
                             <div class="mx-auto col-md-6 mt-5">
                                        <Link onClick={this.handleVerify} id="button" class="btn btn-lg btn-outline-danger px-5 rounded-pill" type="button" style={{width:'100%'}}> Verify email</Link>
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

export default Verify
