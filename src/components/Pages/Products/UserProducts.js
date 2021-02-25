import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pro from '../../../images/t14.jpg'


export class UserProducts extends Component {
    constructor(props){
        super(props)

        this.state = {
            product_image: pro,
            product_name: 'infinix',
            description:'a product of infinix model name smart 4, android version 10.',
            price:'$30,000',
            rating: 5,
            category:'Phones'
        }
      }
    render(){
    var rating = this.state.rating
    var arr2 = []
    arr2.push(rating)
    for(var j=1; j == rating ; j++){
       return rating
    }
    var arr = [];
    for(var i=1; i<=4; i++ ){
        arr.push(i)
    };

    return (
        <div>
            <div className="container random-products">

                <div className="products ">
                    <div className="text-center">
                        <h3 className="d-inline"><span className="text-danger fas fa-shopping-cart"/> Your Products </h3>
                        <span className="d-inline mt-2 float-right btn btn-lg btn-danger fa fa-cart-plus"> Add Products</span>
                    </div>
                    <hr/>
                    <div className="">
                    <div className="row">
                    { 
                        arr.map((a)=>(
                           
                              
                              <div className="col-md-3">
                                <div class="card border-none shadow mb-5 rounded">
                                    <img class="card-img-top" src={this.state.product_image} alt="product pic" style={{width:'70px',height:'90px',margin:'0 auto'}}/>
                                    <div class="card-body">
                                    <h5 class="card-title">{this.state.product_name}</h5>
                                    <p class="card-text">{this.state.description}</p>
                                    <hr/>
                                        <div class="card-text float-left">
                                            {
                                            arr2.map((b)=>(
                                                <span key="b" style={{color:'orange',fontSize:'12px',}} class="fa fa-star checked"></span>
                                            ))
                                            }
                                            
                                        </div>
                                        <div class="card-text float-right">
                                            <p >{this.state.price}</p>
                                        </div>
                                    </div>
                                    <div class=" card-footer" id="Product-footer">
                                        <div className="float-left">
                                            <b>{this.state.category}</b> <span>|</span>
                                        </div>
                                        <div className="mx-3 float-right" style={{fontSize:'20px',}}>
                                            <big className="d-inline mx-2"><Link to="" className="text-danger prod-link fa fa-user"/></big>
                                            <big className="d-inline mx-2"><Link to="" className="text-danger prod-link fa fa-cart-plus"/></big>
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

export default UserProducts

