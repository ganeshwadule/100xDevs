import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [data, setData] = useState(0);
  const [prev, setPrev] = useState();

  // callback fun is called setup function 
  useEffect(() => {
    // runs before re-render of element
    return ()=>{
        setPrev(data)
    }
  }, [data]);

  return (
    <div>
      <div>current {data}</div>
      <div>prev {prev}</div>
      <button onClick={() => setData(data + 1)}>add</button>
    </div>
  );
};

export default Hooks;
