import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import pro from '../../../images/t14.jpg'
import { RandomProduct } from '../../../APIs/ProductsApis/Random'




const displayProducts = JSON.parse(localStorage.getItem('displayProducts'))
class Products extends Component{
    constructor(props){
        super(props)

        this.state = {
            product_image: pro,
            product_name: 'infinix',
            description:'a product of infinix model name smart 4, android version 10.',
            price:'$30,000',
            category:'Phones'
        }
      }
    render(){
    const lent = displayProducts[].length()

    console.log(lent)
    var arr = [];
    for(var i=1; i<=8; i++ ){
        arr.push(i)
    };


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
                        arr.map((a)=>(
                           
                              
                              <div className="col-md-3">
                                <div class="card products-card border-none shadow mb-5 rounded">
                                    <img class="card-img-top" src={this.state.product_image} alt="product pic" style={{width:'70px',height:'90px',margin:'0 auto'}}/>
                                    <div class="card-body">
                                    <h5 class="card-title">{this.state.product_name}</h5>
                                    <p class="card-text float-left">{this.state.description}</p>
                                   
                                       <div className="mx-auto" style={{width:'100%',height:'100%'}}>
                                           <Link to="" className="btn btn-outline-danger prod-link ">View</Link>
                                        </div>
                                    </div>
                                    <div className=" card-footer" id="product-footer">
                                    <div className="float-left">
                                            <b>{this.state.category}</b> <span>|</span>
                                        </div>
                                        <div class="card-text float-right">
                                            <p >{this.state.price}</p>
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
