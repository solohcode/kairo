import axios from 'axios'
import { history } from '../../../App'


const baseUrl = "http://142.93.152.229/cairo/api/"
// const token = JSON.parse(localStorage.getItem('login')).token
// console.log(token)


export const ProfileApi=(token)=> {

 const apiUrl = "fetch_profile?token="
    
        const attach = {
            method: 'GET',
            headers: {'authorization': 'Bearer '+ token}
        }
        
           return fetch(baseUrl+apiUrl , attach).then(async res=>{
                const profileData = await res.json();
                const dataArr = profileData[0]

                if(profileData){
                    localStorage.setItem('profile', JSON.stringify(dataArr))
                    // alert(`Welcome ${dataArr.first_name}`)

                    setTimeout(function() { 
                        history.push('/dashboard')
                     }, 1000)

                }else{
                    console.log('false')
                }

                return dataArr
        
            }).catch(err=>{
                alert(err + " connection error, pls fix.")
            })
     
}


export const UpdateProfApi=(updates, token)=>{

    const Url = 'update_profile?token='

    const attach ={
        headers: {
            'Content-Type': 'multipart/form-data,application/json',
            'authorization': 'Bearer '+ token
        }
    }

    return axios.post(baseUrl+Url,updates, attach).then( res=>{
        const response = res.data
        console.log(response)
    
        return response
    }).catch(err =>{
        if(err === "Request failed with status code 401"){
            history.push('/login')
            alert('Oops your token has expired please re-login to get a new token!')
        }
        console.log(err)
        return err
    })
}

