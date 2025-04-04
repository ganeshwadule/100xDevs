import React, { useState } from 'react'
import { usePrev } from '../hooks/usePrev';

const UsePrevCompo = () => {
    const [count,setCount] = useState(0);
    const prev = usePrev(count);

    function increment(){
        
        setCount(c => c+1);
    }
  return (
    <div>
        <p>Current : {count}</p>
        <p>Previous : {prev}</p>
      <button
        onClick={increment}
      >Increment</button>
    </div>
  )
}

export default UsePrevCompo
