import React from 'react'

// component imports  
import Sidebar from '../../components/Sidebar/Sidebar'
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb'
import UserProducts from '../../components/Pages/Products/UserProducts'

function Products() {
    return (
        <div>
            <BreadCrumb/>
            <div className="product-page mt-big">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar/>
                        </div>
                        <div className="col-md-9">
                            <UserProducts/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
