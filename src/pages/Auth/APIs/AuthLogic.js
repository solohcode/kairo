// import React from 'react'
import { ProfileApi } from '../../Users/Apis/UserLogic'
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
              console.log(status)
      }else{
        console.log(message)
      }
    }).catch(err=>{
        alert(err + " connection error, please check your connection and try again.")
    })
   
}




// API for register starts here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function RegisterApi(data){

    fetch()

}



export { LoginApi, RegisterApi }