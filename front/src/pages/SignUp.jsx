import axios from "axios"
import { useState } from "react"

const SignUp = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName]=useState('')

    const singUp = async(e)=>{
        e.preventDefault()
        let response= await axios.post('/signup/',{
            'email':email,
            'password':password,
            'name':name
        })
        if(response.data.signup){
            window.location.href="/signin/"
        }
    }

    return(
        <form onSubmit={(e)=>singUp(e)}>
            <label>Name</label>
            <input onChange={(e)=>setName(e.target.value)}/>
            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)}/>
            <input type={'submit'}/>
        </form>
    )
}

export default SignUp;