import React, { useEffect, useState } from 'react'

function Practice() {
    const [prod, setProd] = useState([]);

    const ProductData = async()=>{
        let res = await fetch("https://jsonplaceholder.typicode.com/photos")
        res = await res.json()
        setProd(res)
    }
    useEffect(()=>{
        ProductData();
    },[])
  return (
    <>{
    prod.map(product =>{
        return(
            <>
            <h3>{product.id}</h3>
            <h3>{product.title}</h3>
            <h3>{product.url}</h3>
            </>
        )
    })
}
    </>
  )
}

export default Practice
