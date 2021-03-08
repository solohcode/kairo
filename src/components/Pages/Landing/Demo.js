import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchApi } from '../../../APIs/Search/SearchApi'

class Demo extends Component{
    constructor(props){
        super(props)
        this.state = {
            search_term:"",
            get:[]
        }
    }
    
    // async componentDidMount(){
    //     const get = await handleSubmit()
    //     this.setState({get:get})
    // }


    handleChange=(e)=>{
        const {name, value} = e.target
       this.setState({search_term:value})
    }
    
    handleSubmit = async (e)=>{
        e.preventDefault()
        const param = {search_term: this.state.search_term}
        const alert = document.getElementById("message")



        if(param.search_term == ""){
            // alert.style.display="block"
            alert.innerText="please input product name to search"
        }else{
            const get = await SearchApi(param)
            // console.log(get.message)
            if(get.status === false){
                alert.innerText= get.message
                document.getElementById('search-head').style.display="none"
            }else{
                alert.style.display="none"
                this.setState({get:get})
                document.getElementById('search-head').style.display="block"
            }
        }
        
        // console.log(param)
        // console.log(param.search_term)
        
    }

     
render(){
        const {get} = this.state

    return (
        <div>
        <div className="landing">
            <br/>
            <br/>
            <div className="container-fluid my-5">
                <div className="text-center">
                    <div className="kairo-text">
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
                                <option>Food and wear</option>
                            </select>
                        </div>
                        <div className="col-md-2 my-2">
                            <button onClick={this.handleSubmit} className="btn btn-danger btn-lg"> Search</button>
                        </div>
                    </div>

                    <div className="category my-5">
                        <div>
                        <p>Sell at ease buy at less any product of different categories.</p>
                        <h5>Top Selling Categories</h5>
                        </div>
                        <div className="text-center my-5 cards row text-danger">
                            <div className="col-md-3 "></div>
                            <div className="col-md-1  card sub-card">
                                <div className="py-3">
                                    <span className="icon fas fa-lemon"/>
                                    <p>Foods</p>
                                </div>
                            </div>
                            <div className="col-md-1  card sub-card">
                                <div className="py-3">
                                        <span className="icon fas fa-tshirt "/>
                                        <p>Wears</p>
                                </div>
                            </div>
                            <div className="col-md-1  card sub-card">
                                <div className="py-3">
                                        <span className=" icon fas fa-laptop "/>
                                        <p>Gadgets</p>
                                </div>                            </div>
                            <div className="col-md-1  card sub-card">
                                <div className="py-3">
                                    <span className=" icon fas fa-blender "/>
                                    <p>Household</p>
                                </div>
                            </div>
                            <div className="col-md-1  card sub-card">
                                <div className="py-3">
                                    <span className=" icon fas fa-pills "/>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className="col-md-1  card sub-card">
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
                    <div className="">

                        <h2 id="message" className="alert-warning text-center" ></h2>

                    <div id="search-head" style={{display:'none'}} class="text-center ">
                        <h3>Search result <span class="text-danger fas fa-cart-arrow-down"/></h3>
                        <hr/>
                    </div>

                    <div className="row">

                    { 
                        get.map( prod =>(
                           
                              
                        <div key={prod.id} className="col-md-3">
                            <div class="card products-card border-none shadow mb-5 rounded">
                                <img class="card-img-top" src={prod && prod.image} alt="product pic" style={{width:'100px',height:'90px',margin:'0 auto'}}/>
                                <div class="card-body">
                                <h5 class="card-title">{prod && prod.product_name}</h5>
                                <p class="card-text float-left">{prod && prod.description}</p>
                               <br/>
                                   <div className="col-12 mt-3 mx-auto">
                                       <span className="btn btn-outline-danger prod-link" type="button" data-toggle="modal" data-target={`#modal${prod.id}`}>More</span>
                                    </div>
                                </div>
                                <div className=" card-footer" id="product-footer">
                                <div className="float-left">
                                        <b>{prod && prod.category}</b> <span>|</span>
                                    </div>
                                    <div class="card-text float-right">
                                        <p >{prod && prod.price}</p>
                                    </div>
                                </div>


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
                                <h6>Whatsapp Handle:  </h6><a href={`https://wa.me/${prod && prod.phone_no}`}><span className="fas fa-whatsapp"/></a>

                            </div>
                            

                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
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
