import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Cards extends Component {
    constructor(props){
        super(props)

        this.state = {
            NOP: 12,
            NOC: 5,
            NOV: 50

        }
    }
    render() {
        return (
            <div>
                <div className="dashboard-cards">
                <div className="text-center">
                        <Link to="/products" className=" card text-danger p-5 shadow">
                                    <h2><span className="text-white fa fa-shopping-cart"/></h2>
                                    <h3 className="">Uploaded Products</h3>
                                    <h4>{this.state.NOP}</h4>
                                    {/* <span className=" btn btn-sm btn-danger float-right mb-0 fa fa-plus"> Add products</span> */}
                                </Link>
                                <hr/>
                            <div className=" my-5">
                           
                                <div className="card p-5 text-danger shadow">
                                <h2><span className="text-white fa fa-tags"/></h2>
                                    <h3>Products Categories</h3>
                                    <h4>{this.state.NOC}</h4>
                                </div>
                            </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Cards
