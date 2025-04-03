import React, { useEffect, useRef, useState } from "react";
import { useReducer } from "react";

const Clock = () => {
  const [count, setCount] = useState(0);

  const counterRef = useRef(null);

  //

  

  function start(){
    counterRef.current= setInterval(()=>setCount(c=>c+1),1000);
  }
  function stop() {
    clearInterval(counterRef.current);
  }
  return (
    <div>
      <div className="countContainer">{count}</div>
      <div>
        <button onClick={start}>Start Clock</button>
        <button onClick={stop}>Stop Clock</button>
      </div>
    </div>
  );
};

export default Clock;
