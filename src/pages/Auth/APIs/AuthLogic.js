// import React from 'react'
import { ProfileApi } from '../../Users/Apis/UserLogic'


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

   return fetch(baseUrl+loginUrl, requestOptions)
    .then(async res=>{
      const data = await res.json()
      const status = data.status
      const token = data.token
      const message = data.message

      localStorage.setItem('login', JSON.stringify(data))

      if(data.status){

            ProfileApi(token)
            // User(token)
            // CategoryApi(token)
              console.log(status)
      }else{
        console.log(message)
      }
      return data

    }).catch(err=>{
        // alert(err + " connection error, please check your connection and try again.")
        console.log(err)
    })
   
}



// API for log out request >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const LogoutApi=()=>{

//     const Url = 'http://142.93.152.229/cairo/api/auth/logout'
//     const requestOptions={
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json",
//       }
//     }

//     fetch( Url, requestOptions ).then(async res=>{
//       const logout = await res.json()
//       console.log(logout)

//     }).catch(err=>{
//       console.log(err)
//     })

// }


// API for register starts here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function RegisterApi(data){

    fetch()

}



export { LoginApi, RegisterApi }