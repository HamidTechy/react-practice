import React, { useState } from "react";

function StateHook(){
    let [count, setCount] = useState(0);


    const incNum = () =>{
        setCount(count + 1)
    }
    const decNum = () => {
        setCount(count - 1)
    }

    return(
        <>
        <h2>this is useState in react js</h2>
        <br />
        <button onClick={decNum}> - </button>
        <p> {count} </p>
        <button onClick={incNum}> + </button>

        </>
    );
}
export default StateHook;