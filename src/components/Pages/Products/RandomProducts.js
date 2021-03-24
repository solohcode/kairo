import React,{ Component } from 'react'
import { RandomProduct } from '../../../APIs/ProductsApis/Random'
import {Banner} from '../Landing/Banner'



class Products extends Component{
    constructor(props){
        super(props)
        this.state = {
            get:[]
        }
    }
    async componentDidMount(){
        const get = await RandomProduct()
        this.setState({get:get})
    }
    render(){
        const {get} = this.state
        return (

        <div>
            <div className="container ">
                {/* {get} */}
                <div className="products ">
                    <div className="text-center">
                        <h3>Interest Listings <span className="text-danger fas 	fas fa-shopping-basket"/></h3>
                    </div>
                    <hr/>
                    <div className="">
                    <div className="row">
                        
                    { 
                    
                      get==null? <h6 class="alert alert-danger text-center">to view this page please connect to a network...</h6> :
                        get.map( prod =>(
                           
                            //   <div>
                              <div key={prod.id} className="col-sm-3 col-md-3">
                                <div data-toggle="modal" data-target={`#modal${prod.id}`} class="card little_product_card products-card border-none shadow mb-5 rounded">
                                    <img class="card-img-top" src={prod && prod.image} alt="product pic" style={{width:'100px',height:'90px',margin:'0 auto'}}/>
                                    <div class="card-body">
                                    <h5 class="card-title">{prod && prod.product_name}</h5>
                                    <small class="card-text m-0">{prod && prod.description}</small>
                                   <br/>
                                    <div className="card-text">
                                            <b class="d-inline float-left">{prod && prod.category}</b> <span>|</span>
                                            <p class="d-inline float-right">{prod && prod.price}</p>
                                        </div>
                                    </div>
                                    {/* <div className="text-center card-footer" >
                                       <div className="">
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



            <div className="container-fluid my-5">
                <Banner/>
            </div>



                    <div className="container-fluid ">

                <div className="products ">
                    <div className="text-center">
                        <h3>Top Selling <span className="text-danger fas fa-tags"/></h3>
                    </div>
                    <hr/>
                    <div className="">
                    <div className="row">
                        
                    { 
                    
                      get==null? <h6 class="alert alert-danger text-center">to view this page please connect to a network...</h6> :
                        get.map( prod =>(
                           
                            //   <div>
                              <div key={prod.id} className="col-sm-2 col-md-2">
                                <div data-toggle="modal" data-target={`#modal${prod.id}`} class="card product_card products-card border-none shadow mb-5 rounded">
                                    <img class="card-img-top" src={prod && prod.image} alt="product pic" style={{width:'100%',height:'150px',margin:'0 auto'}}/>
                                    <div class="card-body">
                                    <h5 class="card-title">{prod && prod.product_name}</h5>
                                    <small class="card-text m-0">{prod && prod.description}</small>
                                   <br/>
                                    <div className="card-text">
                                            <b class="d-inline float-left">{prod && prod.category}</b> <span>|</span>
                                            <p class="d-inline float-right">{prod && prod.price}</p>
                                        </div>
                                    </div>
                                    {/* <div className="text-center card-footer" >
                                       <div className="">
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

export default Products
