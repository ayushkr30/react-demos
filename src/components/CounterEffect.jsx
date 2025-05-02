import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
       document.title = `Count: ${count}`
}, [count])
 
   const handleCount = () => {
    setCount(count + 1);
   }

  return (
    <div>
     <h1>Count: {count}</h1>
     <button onClick={handleCount} >Increment</button>
    </div>
  )
}

export default CounterEffect