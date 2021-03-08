

const baseUrl = 'http://142.93.152.229/cairo/api/'


export const SearchApi=(param)=>{

    const Url= 'search_products'
    const requestOptions={
        method:"POST",
         body:JSON.stringify(param),
        headers:{
          "Content-Type":"application/json",
        }
      }

 return fetch(baseUrl+Url, requestOptions)
    .then(async res=>{
        const reply = await res.json()
        console.log(reply)
        return reply
    })
    .catch(err =>{
        console.log(err)
    })
}

