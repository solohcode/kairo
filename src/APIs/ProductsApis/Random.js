import React from 'react'

const baseUrl = 'http://142.93.152.229/cairo/api/'

export const RandomProduct =()=>{
   const api = 'display_products'
   const requestOptions={
    method:"GET",
    headers:{
      "Content-Type":"application/json",
    }
  }

   return fetch(baseUrl+api, requestOptions).then(async res =>{
       var rand = await res.json()
      //  console.log(rand)
       return rand

   }).catch(err =>{
        console.log(err + " connection error, please check your connection and try again.")
   })

   
}
