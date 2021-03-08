


const baseUrl = 'http://142.93.152.229/cairo/api/view_products?token='

const User = (token)=>{

    const attach = {
        method: 'GET',
        headers: {'authorization': 'Bearer '+ token}
    }

    fetch(baseUrl , attach).then(async res =>{
        const Prods = await res.json()
        localStorage.setItem('userProduct', JSON.stringify(Prods))
        console.log(Prods)
    }).catch(err =>{
        alert(err)
    })
}




export { User }