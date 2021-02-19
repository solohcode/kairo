import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import pro from '../../../images/t14.jpg'



class Products extends Component{
    constructor(props){
        super(props)

        this.state = {
            product_image: pro,
            product_name: 'infinix',
            description:'4gb ram 32gb rom AV 10',
            price:'$30,000',
            rating:'5',
            category:'Phones'
        }
      }
    render(){

    var arr = [];
    for(var i=1; i<=10; i++ ){
        arr.push(i)
    };

    return (
        <div>
            <div className="container random-products">

                <div className="products my-5">
                    <div className="text-center">
                        <h3>Top Listings <span className="text-danger fas fa-shopping-cart"/></h3>
                    </div>
                    <hr/>
                    <div className=" row products-cards">
                    { 
                        arr.map((a)=>(
                                <div className="col-md-2 my-2 sub-card shadow p-3 mb-5 bg-white rounded" key={a}>
                                    <div className="product-img">
                                        <img src={this.state.product_image} alt="product"/>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <b className="">{this.state.product_name}</b>
                                        </div>
                                    </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="float-left">{this.state.description}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="">{this.state.price}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="">{this.state.rating}</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className=""><b>Category:</b> {this.state.category}</p>
                                            </div>
                                            <div className=" col-md-6">
                                                <div className="col-md-6">
                                                    <Link to="#" className="fas fa-user"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <Link to="#" className="fas fa-cart-plus"/>
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
    )
    }
}

export default Products
