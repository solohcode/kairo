// import React from 'react'
import { ProfileApi } from '../../Users/Apis/UserLogic'


const baseUrl = "http://142.93.152.229/cairo/api/auth/"



// API for login starts here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function LoginApi(data){
    const loginUrl ="login";

      
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

  const url = "register"

 const add = {
   method: "POST",
   body: JSON.stringify(data),
   headers:{
    "Content-Type": 'application/json'
   }
 }

return fetch(baseUrl+url, add).then( async res=>{
   const reply= res.json()
   return reply
 } ).catch(err=>{
  return err
 })
}


// verify email api stats here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function VerifyApi(id){

  const url = `verify_email/${id}`
  const attach ={
    method:'GET',
    headers:{
      'content-type':'application/json'
    }
 }
  return fetch(baseUrl+url, attach).then( async res=>{
    const reply = await res.json()

    return reply
  }).catch(err=>{
    return err
  })

}


function forgotPasswordApi(mail){
  const url = 'forgot_password'
  const attach = {
    method:'POST',
    body: JSON.stringify(mail),
    headers:{
      'content-type':'application/json'
    }
  }

  return fetch(baseUrl+url, attach).then(async res=>{
    const reply = await res.json()
    return reply
  }).catch(err =>{
    return err
  })
}


function ResetPasswordApi(data){
  const url = 'reset_password'

  const attach = {
    method:'POST',
    body: JSON.stringify(data),
    headers:{
        'content-type':'apllication/json'}
  }

  return fetch(baseUrl+url,attach).then(async res=>{
    const resp = await res.json()
    return resp
  }).catch(err=>{
    return err
  })
}



export { LoginApi, RegisterApi, VerifyApi, forgotPasswordApi, ResetPasswordApi }