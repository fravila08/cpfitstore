import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import ItemDisplay from "../components/ItemDisplay"
import Spinner from 'react-bootstrap/Spinner'

const AllItems = () =>{
    const [items, setItems]=useState([])
    const allProds= async()=>{
        let response =await axios.get("https://fakestoreapi.com/products")
        console.log(response.data)
        setItems(response.data)
    }
    useEffect(()=>{
        allProds()
    },[])

    return(
        <div>
            <h3 style={{color:"black", border:"solid black 2px"}}>All Item</h3>
            {items.length < 1 ? 
                <Spinner animation="grow" variant="info" size="lg"/> 
            :
                items.map((item)=>(
                    <ItemDisplay item={item}/>
                ))
            }
        </div>
    )
}

export default AllItems;