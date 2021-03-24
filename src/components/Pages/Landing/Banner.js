import React, { Component } from 'react'
import '../../../styles/bannerStyle.css'
import m1  from '../../../images/bannerImages/b2.png'
import m2 from '../../../images/bannerImages/b3.jpeg'
import m3  from '../../../images/bannerImages/b5.jpeg'
import m4 from '../../../images/bannerImages/b4.jpeg'



export class Banner extends Component {
    render() {
        const style={
            width:'100%',
            height:'100px'
        }
        return (
            <div className="banners">
                
                <div className="container-fluid d-sm-none d-md-block">

                <div className="row">
                <div className="col-9">
                    <div id="carouselExampleCaptions" className="carousel slide carousel-fade shadow bg-body rounded"  data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div className="carousel-item carousel_item1 active" id="carousel_item1">
                        {/* <img src={b1} class="d-block w-100" alt="..."/> */}
                        <div class=" d-none d-md-block text-center text-white mt-5">
                            <h1 className="">Thursday Iya Oloja sales off</h1>
                            <h5>get 30% off every product you purchase at the kairo market corperate malls.</h5>
                            <br/>
                            <h1 className=" text-danger"><span className="fas fa-shopping-cart"/>  <span className="fas fa-shopping-bag"/>  <span className="fas fa-shopping-basket"/></h1>
                            <p>shop economical.</p>
                        </div>
                        </div>
                        <div class="carousel-item carousel_item2" id="carousel_item2">
                        {/* <img src="..." class="d-block w-100" alt="..."/> */}
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Ilashe Osan day</h1>
                            <h5>fruits and veggie seasonal sales and promo discounts.</h5>
                            <br/>
                            <h1 className=" text-danger"><span className="fas fa-apple-alt"/>  <span className="fas fa-carrot"/>  <span className="fas fa-lemon"/></h1>
                            <p>vitamins and mineral sales.</p>
                        </div>
                        </div>
                        <div class="carousel-item text-center text-white" id="carousel_item3">
                        {/* <img src="..." class="d-block w-100" alt="..."/> */}
                        <br/>
                        <div class=" d-none d-md-block m-5">
                            <h1>Olobe Lo Lokor </h1>
                            <h5>food and nutrition general sales and promo discounts at main market.</h5>
                            <br/>
                            <h1 className=" text-danger"><span className="fas fa-pepper-hot"/>  <span className="fas fa-seedling"/>  <span className="fas fa-leaf"/></h1>
                            <p>spice and legumes.</p>

                        </div>
                        </div>
                    </div>
                    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button> */}
                    </div>
                </div>





                <div className="col-3">
                    <div id="carouselExampleCaptions" class="carousel slide carousel-fade shadow bg-body rounded" data-bs-ride="carousel">
                    {/* <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div> */}
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={m1} class="d-block w-100" alt="..."/>
                        {/* <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div> */}
                        </div>
                        <div class="carousel-item">
                        <img src={m2} class="d-block w-100" alt="..."/>
                        {/* <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div> */}
                        </div>
                        <div class="carousel-item">
                        <img src={m3} class="d-block w-100" alt="..."/>
                        {/* <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
                        </div>
                    </div>
                    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button> */}
                    </div>
            </div>

                </div>

            </div>
            </div>
        )
    }
}

export default Banner
