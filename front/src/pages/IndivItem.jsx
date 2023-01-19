import { useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "react-bootstrap/esm/Spinner"
import axios from "axios"
import { useEffect } from "react"

const IndivItem= ()=>{
    let {id} = useParams()
    const [item, setItem]=useState(null)
    const getItem=async()=>{
        let response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(response.data)
        setItem(response.data)
    }

    useEffect(()=>{
        getItem()
    },[])

    return(
        <div>
            {
            item ===null ?
                <Spinner animation="grow" variant="info" size="lg"/>
            :
                <div>
                    <h1>{item.title}</h1> 
                    <img src={item.image} />
                    <label>{item.description}</label>
                    <p>{item.price}</p>
                </div>
            }
        </div>
    )

}
export default IndivItem