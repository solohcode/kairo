import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo3.jpg'



const Header=()=> {
    
    return (
        <div className="headerNav mb-5 " style={{marginBottom:'30px'}}>
            <div className="">
               
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
      
        <div class="w3-bar w3-light-grey">
    <a href="#" class="w3-bar-item w3-button">Home</a>
    <a href="#" class="w3-bar-item w3-button">Link 1</a>
    
  </div>


        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}


                <nav id="navbar" class="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
                <Link class="navbar-brand" to="/">
                    <img src={logo} alt="logo" width="180px" height="30px"/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item mx-3">
                        <Link class="nav-link link " to="/">Home</Link>
                    </li>
                    <li class="nav-item mx-3">
                        <Link class="nav-link link" to="/about">About</Link>
                    </li>
                    <li class="nav-item  mx-3">
                    <div class="dropdown bg-light">
                        <Link class="drop-btn nav-link link">More <span class="fa fa-caret-down"/></Link>
                        <div class="dropdown-content">
                            <Link class="nav-link link" to="/createBusiness">Add business</Link>
                            <Link class="nav-link link" to="/contact">Area map</Link>
                        </div>
                    </div>
                    </li>
                    </ul>
                    <div class="form-inline my-2 my-lg-0 input-group mb-3 col-md-4">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        <span class="input-group-text fa fa-search" onClick id="basic-addon1"/>
                    </div>
                    <div class=" ml-4 ">
                        <Link to="/login" className="btn btn-lg btn-outline-danger fa fa-user"> Login</Link>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
