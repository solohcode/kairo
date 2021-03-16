import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CategoryApi, AddProductApi } from '../../../APIs/ProductsApis/User'



const Prods = JSON.parse(localStorage.getItem('userProduct'))
const Datas = Prods.data
const token = JSON.parse(localStorage.getItem('login')).token 

export class UserProducts extends Component {
    
   
    constructor(props){
        super(props)

        this.state = {
            pages: '',
            data:[],
            get:[],
            Add:{
                product_image: [],
                product_name: '',
                description: '',
                price:'',
                category:''
                }
        }
      }

      

    
    async componentDidMount(){
        const get = await CategoryApi(token)
        this.setState({
            get:get ,
            data: Datas
        })

        
        
    }

    handleChange=(e)=>{
        e.preventDefault()
        const {name, value} = e.target
        const {Add} = this.state
        if(name === "product_image"){
            this.setState({ Add:{...Add,[name]:e.target.files[0]}})
        }else{
            this.setState({ Add:{...Add,[name]:value}})
        }
    }

    // handleImageChange=(e)=>{
    //         // const {name, files} = e.target
    //         const {Add} = this.state
    //         this.setState({
    //         [Add.product_image] : e.target.files[0]
    //         }) 
    // }

    handleSubmit=async(e)=>{
        e.preventDefault()
        // const addModal = document.getElementById('add-modal')
        const alert = document.getElementById('msg')

        const {Add} = this.state
        const data = new FormData()
        data.append('product_image',Add.product_image)
        data.append('product_name',Add.product_name)
        data.append('description',Add.description)
        data.append('price',Add.price)
        data.append('category',Add.category)
        console.log(data)

        // console.log(data)
        console.log(Add)

        if(Add.product_image == ""){
            alert.style.display="block"
            alert.innerText="please select an image file!"
        }else{
            
            alert.style.display="block"
            alert.innerText= ''
            alert.className="spinner-border"
            var AddApi =await AddProductApi([data], token)
            
            if(AddApi){
                if(AddApi.status == false){
                    alert.style.display="block"
                    alert.className="alert alert-warning"
                    alert.innerText= AddApi.message
                }else{
    
                }
            }else{
                alert.style.display="block"
                alert.className="alert alert-danger"
                alert.innerText="please connect to internet!"

            }
            
                
            
            

        }


    }
    
     Delete=(id)=>{
      // id.preventDefault()
      // const Del = DelProdApi(id, token)
      // console.log(Del)
      console.log('delete now')
      console.log(id)

    }


    render(){


    const {get} = this.state
    const {data} = this.state

    return (
        <div>
            <div className="container random-products">
                
                <div className="products">
                    <div className="text-center">
                        <h3 className="d-inline"><span className="text-danger fas fa-shopping-cart"/> Your Products </h3>
                        <span className="d-none d-md-inline mt-2 float-right btn btn-lg btn-danger fa fa-cart-plus" type="button" data-bs-toggle="modal" data-bs-target="#addProduct"> Add Products</span>
                        
                        {/* <div class=""> */}
                            <span data-bs-toggle="tooltip modal" data-bs-placement="bottom" title="Add Product" class=" d-block d-sm-none btn btn-danger position-absolute top-1 end-0 rounded-circle fa fa-plus" type="button" data-bs-target="#addProduct"/>
                        {/* </div> */}
                    </div>
                    <hr/>
                    <div className="">
                    <div className="row">
                    { 
                        
                   
                        data.map( data =>(
                           
                              
                              <div key={data.id} className="col-md-3">
                                <div class="card border-none shadow mb-5 rounded">
                                    <img class="card-img-top" src={data.image} alt="product pic" style={{width:'70px',height:'90px',margin:'0 auto'}}/>
                                    <div class="card-body">
                                    <h5 class="card-title">{data.product_name}</h5>
                                    <p class="card-text">{data.description}</p>
                                    <hr/>
                                        <div className="float-left">
                                            <b>{data.category}</b> <span>|</span>
                                        </div>
                                        <div class="card-text float-right">
                                            <p >{data.price}</p>
                                        </div>
                                    </div>
                                    <div class=" card-footer text-center" id="Product-footer">
                                        
                                        <div className="mx-auto row" style={{fontSize:'20px',}}>
                                            <big className="col-6 d-inline " data-bs-toggle="modal" data-bs-target={`#delete${data.id}`} ><span  className="text-danger prod-link fa fa-trash" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete product"/></big>
                                            <big className="col-6 d-inline" data-bs-toggle="modal" data-bs-target={`#edit${data.id}`} ><Link className="text-danger prod-link fa fa-edit" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit product"/></big>
                                        </div>
                                    </div>
                                </div>

                                    {/* Edit modal//////////////////////////////////  */}
                                <div key={data.id} class="modal fade" id={`edit${data.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            
                                        <form  >
                                        <div class="form-group row">
                                            <div class="col-3">
                                                <img src={data.image} alt="product pic" width="80px" height="80px" />
                                            </div>
                                            <div className="form-group col-9">
                                                <label   label for="product_image">Product Image</label>
                                                <input type="file" class="form-control" name="product_image" required />
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon3">Product name</span>
                                            <input type="text" placeholder={data.product_name} class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon3">Description</span>
                                            <input type="text" placeholder={data.description} class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                        </div>
                                        
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon3">Price</span>
                                            <input type="text" placeholder={data.price} class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                        </div>
                                        <div className="form-group">
                                        <label for="category">Category</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option>{data.category}</option>
                                            {
                                                get==null? <option class="alert alert-danger">please connect to a network to view available categories.</option> :
                                            get.map(cat =>( 
                                                <option value={cat.category_name} key={cat.id}>{cat.category_name}</option> 
                                            ))
                                                
                                            }
                                        </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="price">Other category if not available above</label>
                                                <input type="text" name="category" onChange={this.handleChange} class="form-control"   required />
                                        </div>
                                        </form>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                    {/* Delete modal//////////////////////////////////  */}
                                    <div key={`del${data.id}`} class="modal fade" id={`delete${data.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to delete this product?</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            
                                        <div class="">
                                    <img class="card-img-top" src={data.image} alt="product pic" style={{width:'70px',height:'90px',margin:'0 auto'}}/>
                                    <div class="card-body">
                                    <h5 class="card-title">{data.product_name}</h5>
                                    <p class="card-text">{data.description}</p>
                                    <hr/>
                                        <div className="float-left">
                                            <b>{data.category}</b> <span>|</span>
                                        </div>
                                        <div class="card-text float-right">
                                            <p >{data.price}</p>
                                        </div>
                                    </div>
                                </div>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn-danger" onClick={this.Delete(`del${data.id}`)}>Delete</button>
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






 {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODAL DISPLAYS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                   
                    <div class="modal fade" id="addProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Add Products to platform</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="mt-2 col-12">
                                <span class="alert alert-warning" style={{display:'none'}} id="msg"></span>
                            </div>
                            <div class="modal-body" id="add-modal">
                                    <form  >
                                        <div class="form-group">
                                            <label   label for="product_image">Product Image</label>
                                                <input type="file" name="product_image" onChange={this.handleChange} class="form-control"  />
                                        </div>
                                        <div className="form-group">
                                            <label for="product_name">Product Name</label>
                                                <input type="text" name="product_name" onChange={this.handleChange} class="form-control" value={this.state.Add.product_name}  required />
                                        </div>
                                        <div className="form-group">
                                            <label for="description">Description</label>
                                                <input type="text" name="description" onChange={this.handleChange} class="form-control" value={this.state.Add.description}  required />
                                        </div>
                                        <div className="form-group">
                                            <label for="price">Price</label>
                                                <input type="number" name="price" onChange={this.handleChange} class="form-control" value={this.state.Add.price}  required />
                                        </div>
                                        <div className="form-group">
                                        <label for="category">Category</label>
                                        <select name="category" onSelect={this.handleChange} class="form-select" aria-label="Default select example" value={this.state.Add.category}>

                                            <option selected>Select Category</option>

                                            {
                                                get==null? <option class="alert alert-danger">please connect to a network to view available categories.</option> :
                                            get.map(cat =>( 
                                                <option value={cat.category_name} key={cat.id}>{cat.category_name}</option> 
                                            ))
                                            }
                                        </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="price">Other category if not available above</label>
                                                <input type="text" name="category" onChange={this.handleChange} class="form-control" value={this.state.Add.category}   required />
                                        </div>
                
                                        </form>
                                </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={this.handleSubmit} class="btn btn-primary">Upload</button>
                            </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
    }
}

export default UserProducts

