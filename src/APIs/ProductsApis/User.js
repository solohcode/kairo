import axios from 'axios'
import { history } from '../../App'


const baseUrl = 'http://142.93.152.229/cairo/api/'
// const login = JSON.parse(localStorage.getItem('login'))
// export const token =  login.token 


const User = (token)=>{

    const Url = "view_products?token="
    
    const attach = {
        method: 'GET',
        headers: {'authorization': 'Bearer '+ token}
    }

    return fetch(baseUrl+Url , attach).then(async res =>{
        const Prods = await res.json()
        console.log(Prods)
        return Prods
    }).catch(err =>{
        alert('connection error!')
    })
}



const CategoryApi = (token)=>{

    const Url = "fetch_categories?token="

    const attach = {
        method: 'GET',
        headers: { 'authorization': 'Bearer '+ token }
    }

    return fetch(baseUrl+Url, attach)
    .then(async res =>{
        const Cat = await res.json()
        localStorage.setItem('category',JSON.stringify(Cat))

      if(Cat.status_code===401){ 
          history.push("/login")
            alert('please re-login')
        }

        return Cat

    }).catch(err =>{
        console.log(err)
    })
}


const AddProductApi = (Prod, token)=>{

    const Url ="add_products?token="

    const attach = {
        headers:{
            'authorization':'Bearer '+ token,
            'content-type': 'application/json'
        }
    }
    console.log(Prod)
    return axios.post(baseUrl+Url , Prod, attach ).then( res =>{
        // const response =await res.data
        console.log(res.data)
        return res.data
    }).catch(err =>{
        return err
    })
}


const DelProdApi =async(id, token)=>{

   const Url =  `delete_product/${id}?token=`
   
   const attach ={
       method: 'GET',
       headers: { 'authorization': 'Bearer '+ token}
   }

   return await fetch(baseUrl+Url, attach).then(async res=>{
       const reply = res.json()
       return reply
   })

}




export { User, CategoryApi, DelProdApi, AddProductApi }