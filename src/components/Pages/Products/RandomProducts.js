import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { RandomProduct } from '../../../APIs/ProductsApis/Random'



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
            <div className="container-fluid random-products">
                {/* {get} */}
                <div className="products my-5">
                    <div className="text-center">
                        <h3>Top Listings <span className="text-danger fas fa-shopping-cart"/></h3>
                    </div>
                    <hr/>
                    <div className="">
                    <div className="row">
                        
                    { 
                    
                      get==null? <h6 class="alert alert-danger text-center">to view this page please connect to a network...</h6> :
                        get.map( prod =>(
                           
                            //   <div>
                              <div key={prod.id} className="col-sm-3 col-md-3">
                                <div class="card products-card border-none shadow mb-5 rounded">
                                    <img class="card-img-top" src={prod && prod.image} alt="product pic" style={{width:'100px',height:'90px',margin:'0 auto'}}/>
                                    <div class="card-body">
                                    <h5 class="card-title">{prod && prod.product_name}</h5>
                                    <p class="card-text float-left">{prod && prod.description}</p>
                                   <br/><br/>
                                    <div className="float-left">
                                            <b>{prod && prod.category}</b> <span>|</span>
                                        </div>
                                        <div class="card-text float-right">
                                            <p >{prod && prod.price}</p>
                                        </div>
                                    </div>
                                    <div className="text-center card-footer" >
                                       <div className="">
                                           <span className="btn btn-outline-danger prod-link" type="button" data-toggle="modal" data-target={`#modal${prod.id}`}>view</span>
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
