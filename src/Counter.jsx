import { useState } from "react"

export default function Counter(){

    const [count , setCount ] = useState(0)

    const handleAdd =() =>{
        const newNum = count+1;
        setCount(newNum)
    }
    const handleRemove =() =>{
        const newNum = count-1;
        setCount(newNum)
    }

    return(
        <div style={{border:'2px solid green'}}>
            <h3>counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}