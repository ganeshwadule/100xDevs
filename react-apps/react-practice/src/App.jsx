import { use, useEffect, useState } from "react";

function App() {
  const [doRender, setDORender] = useState(false);
  console.log("counting");
  useEffect(() => {
    console.log("mounter");
    const interval = setInterval(() => {
      setDORender((prev) => !prev);
    }, 5000);

    return () => {
      console.log("unmounted");
      clearInterval(interval);
    };
  }, []);

  return <>{doRender && "Hii There"}</>;
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const clock = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);
  console.log("Counter");
  return (
    <>
      <div>
        <div>Counter : {count}</div>
      </div>
    </>
  );
}

export default App;
