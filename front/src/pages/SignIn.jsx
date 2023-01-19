import { useState } from "react"
import axios from "axios"

const SignIn = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const singIn = async(e)=>{
        e.preventDefault()
        let resposne = await axios.post('/signin/',{
            'email':email,
            'password':password
        })
        if(resposne.data.success){
            window.location.href="/"
        }
    }

    return(
        <form onSubmit={(e)=>singIn(e)}>
            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)}/>
            <input type={'submit'}/>
        </form>
    )
}

export default SignIn;