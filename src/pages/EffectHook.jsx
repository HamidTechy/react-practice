import React from 'react'
import { useState, useEffect } from 'react'
function EffectHook() {
const [count, setCount] = useState(0);
useEffect( ()=>{
    alert(`Hellow this is useEffect Hook Counting ${count}`)
}, [count])
// with just [] it will render only once and [count] it will render only for count other program will not be effected

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={ ()=> setCount(count + 1)}>Update State</button>
    
    </div>
  )
}

export default EffectHook
