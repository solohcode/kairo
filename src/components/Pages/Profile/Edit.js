import React, { Component } from 'react'
// import user from '../../../images/user.png'
import { ProfileData } from '../../../LocalStorage/Storage'
import { UpdateProfApi } from '../../../pages/Users/Apis/UserLogic'
// import { history } from '../../../App'


const login = JSON.parse(localStorage.getItem('login'))
if(login == null){
    console.log('empty')
}else{
     var token = login.token
}
export class Edit extends Component {

    constructor(props){
        super(props)

        this.state={
            Update:{
                profile_pics: null,
                first_name:'',
                last_name:'',
                about_user:'',
                email:'',
                phone_no:'',
                social_handle:'',
                business_name:'',
                about_business:'',
                products:'',
                services:'',
                address:'',
                business_website:''
            }
        }
    }



    
        handleChange=(e)=>{
        e.preventDefault()
        const {name, value} = e.target
        const {Update} = this.state
        if(name === "profile_pics"){
            this.setState({ Update:{...Update,[name]:e.target.files[0]}})
        }else{
            this.setState({ Update:{...Update,[name]:value}})
        }
    }


        handleSubmit =async (e) => {
            e.preventDefault();
            const {Update} = this.state
            const alert = document.getElementById("msg")
            const btn = document.getElementById("button")

            // const {Update} = this.state
            const editProf = new FormData();
            editProf.append('profile_pics', Update.profile_pics)
                editProf.append('first_name', Update.first_name)
                editProf.append('last_name', Update.last_name)
                editProf.append('about_user', Update.about_user)
                editProf.append('email', Update.email)
                editProf.append('phone_no', Update.phone_no)
                editProf.append('social_handle', Update.social_handle)
                editProf.append('business_name', Update.business_name)
                editProf.append('about_business', Update.about_business)
                editProf.append('products', Update.products)
                editProf.append('services', Update.services)
                editProf.append('address', Update.address)
                editProf.append('business_website', Update.business_website)
                

                if(Update.profile_pics == null){
                    alert.style.display="block"
                    alert.innerText="please choose a photo and fill in necessary datas"
                }else{
                    alert.innerText=""
                    alert.style.display="block"
                    alert.className="spinner-border"
                    btn.innerText="Updating..."
                    const Edit =await UpdateProfApi(editProf, token)
                    
                    if(Edit){

                        if(Edit.status === true){
                        btn.innerText="Update"
                        alert.style.display="block"
                        alert.className="alert alert-success"
                        alert.innerText=Edit.message+" re-login to view update"
                        }else{
                            btn.innerText="Update"
                            alert.style.display="block"
                            alert.className="alert alert-danger"
                            alert.innerText=Edit.message 
                        }
                    }else{
                        btn.innerText="Update"
                        alert.style.display="block"
                        alert.className="alert alert-danger"
                        alert.innerText="Update failed!"
                    }
                }
                // console.log(Update)
            
          };

    render() {
        return (
            <div>
                <div>
                

                    <div className="text-center">
                    <h3 className="text-secondary"><span className="fas fa-user-edit text-danger"/> Edit your profile</h3>
                    <hr/>
                        
                    <div className="row ">
                        <div className="col-6 text-center">
                            <img src={ProfileData.dp} alt="user" width="60px" height="60px" className="float-left border border-secondary rounded-circle"/>
                        </div>
                        <div className="col-6 mt-2">
                            <div class="input-group mb-3 mx-auto">
                            
                            <div class="form-group">
                                {/* <label   label for="product_image">choose image file</label> */}
                                <input type="file" name="profile_pics" onChange={this.handleChange} class="form-control"  />
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div>
                        <h4>Personal Information</h4>
                        <hr/>
                    <div className="row">
                        <div className="col-md-4">
                                    <div className="mx-auto">
                                        <label className="form-label">First Name</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-user"/>
                                        <input type="text" name="first_name" onChange={this.handleChange} className="form-control" placeholder="first name" required/>
                                        </div>
                                    </div>

                                    <div className="mx-auto">
                                        <label className="form-label">Last Name</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-user"/>
                                        <input type="text" name="last_name" onChange={this.handleChange} className="form-control" placeholder="last name" required/>
                                        </div>
                                    </div>
                        </div>

                        <div className="col-md-4">
                                    
                                    <div className="mx-auto">
                                        <label className="form-label">E-mail</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-envelope"/>
                                        <input type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="email" required/>
                                        </div>
                                    </div>

                                    <div className="mx-auto">
                                        <label className="form-label">Mobile Number</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-phone"/>
                                        <input type="number" name="phone_no" onChange={this.handleChange} className="form-control" placeholder="mobile number" required/>
                                        </div>
                                    </div>
                        </div>

                        <div className="col-md-4">
                                 <div className="mx-auto">
                                        <label className="form-label">Social Handle</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-whatsapp"/>
                                        <input type="text" name="social_handle" onChange={this.handleChange} className="form-control" placeholder="whatsapp social handle/number" required/>
                                        </div>
                                    </div>

                                    <div className="mx-auto">
                                        <label className="form-label">About you</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-info"/>
                                        <textarea height="10px" name="about_user" onChange={this.handleChange} type="text" className="form-control" placeholder="about you in short note" required/>
                                        </div>
                                    </div>
                        </div>
                    </div>
                    </div>

                   {/* <hr/> */}

                    <div>
                        <h4>Business Information</h4>
                        <hr/>
                        <div className="row">
                        <div className="col-md-4">
                                    <div className="mx-auto">
                                        <label className="form-label">Business Name</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-certificate"/>
                                        <input type="text" name="business_name" onChange={this.handleChange} className="form-control" placeholder="business name" required/>
                                        </div>
                                    </div>

                                    <div className="mx-auto">
                                        <label className="form-label">Services</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-gears"/>
                                        <input type="text" name="services" onChange={this.handleChange} className="form-control" placeholder="services" required/>
                                        </div>
                                    </div>
                        </div>

                        <div className="col-md-4">
                                    
                                    <div className="mx-auto">
                                        <label className="form-label">Products</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-tags"/>
                                        <input type="text" name="products" onChange={this.handleChange} className="form-control" placeholder="products" required/>
                                        </div>
                                    </div>

                                    <div className="mx-auto">
                                        <label className="form-label">Website Url</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-link"/>
                                        <input type="text" name="business_website" onChange={this.handleChange} className="form-control" placeholder="website link" required/>
                                        </div>
                                    </div>
                        </div>

                        <div className="col-md-4">
                                 <div className="mx-auto">
                                        <label className="form-label">Address</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-map-marker"/>
                                        <input type="text" name="address" onChange={this.handleChange} className="form-control" placeholder="address location" required/>
                                        </div>
                                    </div>

                                    <div className="mx-auto">
                                        <label className="form-label">About Business</label>
                                        <div className="input-group">
                                        <span className="input-group-text fa fa-info"/>
                                        <textarea type="text" name="about_business" onChange={this.handleChange} className="form-control" placeholder="about your business in short note" required/>
                                        </div>
                                    </div>
                        </div>
                    </div>
                    </div>
                        <div className="mb-2 mt-2 col-md-12">
                            <div class="row d-flex justify-content-center">
                                {/* <div class=""> */}
                                <button onClick={this.handleSubmit} id="button" className="col-md-3 mx-auto btn btn-lg btn-danger"> Update </button>
                                {/* </div> */}
                               <div class="col-md-9">
                                <span class="alert alert-warning" style={{display:'none'}} id="msg"></span>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
        )
    }
}

export default Edit
