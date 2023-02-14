import React, { useState } from "react";

const InputMethodTwo = () => {
const [uname, setUname] = useState("");
const [age, setAge] = useState("");
const [addres, setAddres] = useState("");

    return(
        <>
        Name: <input name="uname" type="text" onChange={(event) => setUname(event.target.value)}/>
        <br />
        Age: <input age="age" type="text" onChange={(event) => setAge(event.target.value)}/>
        <br/>
        address: <input addres="addres" type="text" onChange={(event) => setAddres(event.target.value)}/>
        <br/>
        Name: {uname}
        <br />
        Age: {age}
        <br />
        address: {addres}
        </>
    )
}
export default InputMethodTwo;