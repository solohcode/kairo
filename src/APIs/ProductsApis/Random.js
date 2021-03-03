import React from 'react'
import { render } from "@testing-library/react"

const baseUrl = 'http://142.93.152.229/cairo/api/'

export const RandomProduct = ()=>{
   const api = 'display_products'
   const requestOptions={
    method:"GET",
    headers:{
      "Content-Type":"application/json",
    }
  }

   fetch(baseUrl+api, requestOptions).then(async res =>{
       var rand =await res.json()
       localStorage.setItem('displayProducts',JSON.stringify(rand))

   }).catch(err =>{
        alert(err + " connection error, please check your connection and try again.")
   })

  
   const rand = JSON.parse(localStorage.getItem('displayProducts'))
   
   return(
       <div>
           { console.log(rand) }
       </div>
   )
   
}
export const storedRand = JSON.parse(localStorage.getItem('displayProducts'))
