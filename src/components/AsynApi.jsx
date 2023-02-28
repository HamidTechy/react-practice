import React, { useState, useEffect } from "react";

const AsynApi = () => {
    const [prod, setProd] = useState([]);
    //const data = "https://jsonplaceholder.typicode.com/photos";


    const ProductData = async()=>{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts")
        res = await res.json()
        console.log(res)
        setProd(res)
     }
    
     useEffect(()=>{
        ProductData();
     },[])

    return(
    <>
    <h1>Fetch Api</h1>
    {
        prod.map(sprod =>{
            return(
                <>
            <h3>{sprod.title}</h3>,
            <image src={sprod.image} width={400} height={300}/>,
            <h3>{sprod.description}</h3>,
            <h3>{sprod.price}</h3>,
            </>
            )
        })
    }
    </>
    )
}
export default AsynApi;


 