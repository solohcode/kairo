// import React from 'react'
import { ProfileApi } from '../../Users/Apis/UserLogic'
import { User } from  '../../../APIs/ProductsApis/User'
import { history } from '../../../App'


const baseUrl = "http://142.93.152.229/cairo/api/"



// API for login starts here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function LoginApi(data){
    const loginUrl ="auth/login";

      
    const requestOptions={
        method:"POST",
         body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json",
        }
      }

    fetch(baseUrl+loginUrl, requestOptions)
    .then(

    )
    .then(async res=>{
      const data = await res.json()
      const status = data.status
      const token = data.token
      const message = data.message
      localStorage.setItem('err', JSON.stringify(data))

      

      if(data.status){
           localStorage.setItem('login',JSON.stringify(data))

            ProfileApi(token)
            User(token)
              console.log(status)
      }else{
        console.log(message)
      }
    }).catch(err=>{
        alert(err + " connection error, please check your connection and try again.")
    })
   
}



// API for log out request >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const LogoutApi=()=>{

    const Url = 'http://142.93.152.229/cairo/api/auth/logout'
    const requestOptions={
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      }
    }

    fetch( Url, requestOptions ).then(async res=>{
      const logout = await res.json()
      console.log(logout)

    }).catch(err=>{
      console.log(err)
    })

}


// API for register starts here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function RegisterApi(data){

    fetch()

}



export { LoginApi, RegisterApi , LogoutApi}