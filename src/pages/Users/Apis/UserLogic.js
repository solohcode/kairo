
import { history } from '../../../App'


const baseUrl = "http://142.93.152.229/cairo/api/"


export const ProfileApi=(token)=> {

 const apiUrl = "fetch_profile?token="
    
        const attach = {
            method: 'GET',
            headers: {'authorization': 'Bearer '+ token}
        }
        
            fetch(baseUrl+apiUrl , attach).then(async res=>{
                let status
                const profileData = await res.json();
                const dataArr = profileData[0]
                if(profileData){
                    localStorage.setItem('profile', JSON.stringify(dataArr))
                    alert(`Welcome ${dataArr.first_name}`)

                    setTimeout(function() { 
                        history.push('/dashboard')

                     }, 2000)

                }else{
                    console.log(status = false)
                }

        
            }).catch(err=>{
                alert(err + " connection error, pls fix.")
            })
     
}

