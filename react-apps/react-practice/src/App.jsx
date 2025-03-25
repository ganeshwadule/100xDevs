import { use, useEffect, useState } from "react";

function App() {
  const [doRender,setDORender] = useState(false)
  return (
    <>
    {doRender && <Counter />}
    <button onClick={()=>setDORender(prev => !prev)}>Start a counter</button>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

 useEffect(()=>{
    setInterval(()=>{
      setCount(prev=>prev+1)
    },1000)
 },[])
  console.log("Counter");
  return (
    <>
      <div>
        <button>Counter : {count}</button>
      </div>
    </>
  );
}

export default App;
