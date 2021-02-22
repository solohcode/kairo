import React from 'react'

function Demo() {
    return (
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
                            <input name="search" placeholder="Search for products..." /><span className="fa fa-search" style={{marginLeft:"-30px"}}/>
                        </div>
                        <div className="cat col-md-5 my-2">
                            <select>
                                <option>Select Categories</option>
                                <option>All</option> 
                                <option>Food and wear</option>
                            </select>
                        </div>
                        <div className="col-md-2 my-2">
                            <button className="btn btn-danger btn-lg"> Search</button>
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
    )
}

export default Demo
