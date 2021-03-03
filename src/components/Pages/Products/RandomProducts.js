import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { RandomProduct } from '../../../APIs/ProductsApis/Random'




const displayProducts = JSON.parse(localStorage.getItem('displayProducts'))
class Products extends Component{
    render(){
    
        const product = displayProducts

    return (

        <div>
            <div className="container random-products">
                <RandomProduct/>
                <div className="products my-5">
                    <div className="text-center">
                        <h3>Top Listings <span className="text-danger fas fa-shopping-cart"/></h3>
                    </div>
                    <hr/>
                    <div className="">
                    <div className="row">
                    { 
                        product.map( prod =>(
                           
                              
                              <div key={prod.id} className="col-md-3">
                                <div class="card products-card border-none shadow mb-5 rounded">
                                    <img class="card-img-top" src={prod.product_image} alt="product pic" style={{width:'70px',height:'90px',margin:'0 auto'}}/>
                                    <div class="card-body">
                                    <h5 class="card-title">{prod.product_name}</h5>
                                    <p class="card-text float-left">{prod.description}</p>
                                   
                                       <div className="mx-auto" style={{width:'100%',height:'100%'}}>
                                           <Link to="" className="btn btn-outline-danger prod-link ">View</Link>
                                        </div>
                                    </div>
                                    <div className=" card-footer" id="product-footer">
                                    <div className="float-left">
                                            <b>{prod.category}</b> <span>|</span>
                                        </div>
                                        <div class="card-text float-right">
                                            <p >{prod.price}</p>
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
