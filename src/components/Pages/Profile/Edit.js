import React, { Component } from 'react'
// import user from '../../../images/user.png'
import { ProfileData } from '../../../LocalStorage/Storage'
import { UpdateProfApi } from '../../../pages/Users/Apis/UserLogic'
import { history } from '../../../App'


const login = JSON.parse(localStorage.getItem('login'))
const token = login.token
export class Edit extends Component {

    constructor(props){
        super(props)

        this.state={
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



    
        handleChange = (e) => {
            this.setState({
            [e.target.name]: e.target.value
            })
            return e.target.value
        };

        handleImageChange = (e) => {
            this.setState({
            profile_pics: e.target.files[0]
            })
        };

        handleSubmit = (e) => {
            e.preventDefault();
            const alert = document.getElementById("msg")
            const btn = document.getElementById("button")
            const load = document.getElementById("loader")

            const datas = this.state;
            const editProf = new FormData();
            editProf.append('profile_pics', this.state.profile_pics)
                editProf.append('first_name', this.state.first_name)
                editProf.append('last_name', this.state.last_name)
                editProf.append('about_user', this.state.about_user)
                editProf.append('email', this.state.email)
                editProf.append('phone_no', this.state.phone_no)
                editProf.append('social_handle', this.state.social_handle)
                editProf.append('business_name', this.state.business_name)
                editProf.append('about_business', this.state.about_business)
                editProf.append('products', this.state.products)
                editProf.append('services', this.state.services)
                editProf.append('address', this.state.address)
                editProf.append('business_website', this.state.business_website)
                

                if(datas.profile_pics == null){
                    alert.style.display="block"
                    alert.innerText="please choose a photo and fill in necessary datas"
                }else{
                    const Edit = UpdateProfApi(datas, token)
                    alert.style.display="none"
                    // load.style.display="block"
                    
                    if(Edit){
                        btn.innerText="Updating..."
                        // alert.style.display="block"
                        // alert.innerText= Edit.message

                        if(Edit.message){
                        load.style.display="none"
                        btn.innerText="Update"
                        }
                    }else{

                    }
                }
                console.log(datas)
            
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
                            <div class="input-group-prepend">
                                <span class="input-group-text">Upload image</span>
                            </div>
                            <div class="custom-file">
                                <input type="file" name="profile_pics" onChange={this.handleImageChange} class="custom-file-input" id="inputGroupFile01" required/>
                                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
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
                            <div class="row">
                                <button onClick={this.handleSubmit} id="button" className="col-3 btn btn-lg btn-danger mx-auto">Update <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" id="loader" style={{display: 'none'}}/></button>
                               <div class="col-9">
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
