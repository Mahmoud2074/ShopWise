import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Getapi(url) {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get(url).then((product)=>{
            setProducts(product.data)
        })
    },[products])
  return [products]
}
