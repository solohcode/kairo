import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchApi } from '../../../APIs/Search/SearchApi'
// import { CategoryApi } from '../../../APIs/ProductsApis/User'

class Demo extends Component{
    constructor(props){
        super(props)
        this.state = {
            search_term:"",
            get:[],
            cat:[]
        }
    }
    
    // async componentDidMount(){
    //     const get = await CategoryApi()
    //     this.setState({cat:get})
    // }


    handleChange=(e)=>{
        const {name, value} = e.target
       this.setState({search_term:value})
    }
    
    handleSubmit = async (e)=>{
        e.preventDefault()
        const param = {search_term: this.state.search_term}
        const alert = document.getElementById("message")
        const btn = document.getElementById("button")
        const search = document.getElementById("search-display")
        const result = document.getElementById('search-head')




        if(param.search_term === ""){
            alert.className="text-danger"
            alert.innerText="please input product name to search"
        }else{
            search.style.display="block"
            alert.innerText="Please wait your search is on it's way."
            btn.innerText="requesting..."
            var get = await SearchApi(param)
            console.log(get.err)

            const errs = [{product_name:"connection problem please connect to internet"}]
            
            
                    if(!get || get.err){
                        alert.innerText="connection error please connect to a network"
                        alert.className="alert-danger text-center"
                        this.setState({get:errs})
                        // alert.innerText="no internet connection!"
                    
                    }else{

                        
                        if(get.status === false){
                            // this.setState({get: errs})
                            btn.innerText="Search"
                            alert.style.display="block"
                            alert.className="text-danger text-center"
                            alert.innerText="product not available"
                            result.style.display="none"
                        }else{
                            this.setState({get:get})
                            btn.innerText="Search"
                            alert.style.display="block"
                            alert.innerText="check search result below"
                            result.style.display="block"

                        }

                    }
               
        }
        
    }

     
render(){
        const {get} = this.state
        // const {cat} = this.state

    return (
        <div>
        <div className="landing mt-5">
            <br/>
            <br/>
            <div className="container-fluid ">
                <div className="text-center">
                    <div className="kairo-text mt-5">
                        <h3 className="text-danger"><span className="fas fa-map-marker"/>Kairo Local Online Market Platform.</h3>
                        <h5 className="px-5">an online market platform for a local market at oshodi isolo local government lagos state.</h5>
                    </div>

                    <div className="search my-5 row">
                        <div className="sea col-md-5 my-2">
                            <input onChange={this.handleChange} name="search_term" placeholder="Search for products..." /><span className="fa fa-search" style={{marginLeft:"-30px"}}/>
                        </div>
                        <div className="cat col-md-5 my-2">
                            <select>
                                <option>Select Categories</option>
                                <option>All</option> 
                                {
                                    // cat.map(cat =>(
                                    //     <option key={cat.id} >{cat.category_name}</option>
                                    // ))
                                }
                            </select>
                        </div>
                        <div className="col-md-2 my-2">
                            <button id="button" onClick={this.handleSubmit} className="btn btn-danger btn-lg"> Search</button>
                        </div>
                    </div>
                        <div class=" col-12">
                        <p class=" mess" id="message">Sell at ease buy at less any product of different categories.</p>
                        </div>

                    <div className="d-none d-md-block category  mb-5">
                        <div>
                        <h5>Top Selling Categories</h5>
                        </div>
                        <div className="text-center my-5 cards row text-danger">
                            <div className="col-md-3 "></div>
                            <div className="col-md-1 col-sm-1 sub-card">
                                <div className="py-3">
                                    <span className="icon fas fa-lemon"/>
                                    <p>Foods</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-1 sub-card">
                                <div className="py-3">
                                        <span className="icon fas fa-tshirt "/>
                                        <p>Wears</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-1 sub-card">
                                <div className="py-3">
                                        <span className=" icon fas fa-laptop "/>
                                        <p>Gadgets</p>
                                </div>                            </div>
                            <div className="col-md-1 col-sm-1 sub-card">
                                <div className="py-3">
                                    <span className=" icon fas fa-blender "/>
                                    <p>Household</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-1 sub-card">
                                <div className="py-3">
                                    <span className=" icon fas fa-pills "/>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-1 sub-card">
                                <div className="py-3">
                                    <span className=" icon fas fa-gem "/>
                                    <p>Fashion</p>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>






        <div className="container Search-product">
                <div className="search-Product my-5">
                    <div className="text-center">
                    </div>
                    <div className="" id="search-display" style={{display:'none'}}>

                        {/* <h6 id="message" className="message alert-warning text-center" ></h6> */}

                    <div id="search-head" style={{display:'none'}} class="text-center ">
                        <h3>Search result <span class="text-danger fas fa-cart-arrow-down"/></h3>
                        <hr/>
                    </div>

                    <div className="row">

                    { 
                       
                        get.map(prod =>(
                           
                              
                        <div key={prod.id} className="col-md-3">
                            <div class="card little_product_card products-card border-none shadow mb-5 rounded" data-toggle="modal" data-target={`#modal${prod.id}`}>
                                <img class="card-img-top" src={prod && prod.image} alt="product pic" style={{width:'100px',height:'90px',margin:'0 auto'}}/>
                                <div class="card-body">
                                <h5 class="card-title">{prod && prod.product_name}</h5>
                                <p class="card-text float-left">{prod && prod.description}</p>
                               <br/><br/>
                                    <div className="card-text">
                                            <b class="d-inline float-left">{prod && prod.category}</b> <span>|</span>
                                            <p class="d-inline float-right">{prod && prod.price}</p>
                                    </div>
                                </div>
                                {/* <div className="text-center card-footer">
                                   <div className="mx-auto">
                                       <span className="btn btn-outline-danger prod-link" type="button" data-toggle="modal" data-target={`#modal${prod.id}`}>view</span>
                                    </div>
                                </div> */}


                                <div  class="modal fade" id={`modal${prod.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Product details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                            <img class="text-center" src={prod && prod.image} alt="product pic" style={{width:'100px',height:'100px',margin:'0 auto'}}/>
                           <br/>
                            <h5 class="">{prod && prod.product_name}</h5>
                            <p class="card-text">{prod && prod.description}</p>
                           
                                <div>
                                    <div className="float-left">
                                      <h6>Category: </h6>  <b>{prod && prod.category}</b>
                                    </div>
                                    <div class="card-text float-right">
                                      <h6>Price: </h6>  <p >{prod && prod.price}</p>
                                    </div>
                                </div>
                            {/* <hr/> */}
                            <br/>
                            <div>
                                <h5 class="text-center">Sellers details</h5><hr/><br/>
                                <h6>Sellers Address:  </h6><p>{prod && prod.address}</p>
                                <h6>Sellers Mobile number:  </h6><p>{prod && prod.phone_no}</p>
                                <h6 class="d-inline">Whatsapp Handle:  </h6><a href={`https://wa.me/${prod && prod.phone_no}`} className="mx-3 d-inline btn btn-outline-success rounded-circle"><span className="fa fa-whatsapp"/></a>

                            </div>
                            

                            </div>
                            {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div> */}
                        </div>
                        </div>
                        </div>


                            </div>


                        

                        </div>

                           
                         
                                ))
                    }
                       
                              </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
}


export default Demo
