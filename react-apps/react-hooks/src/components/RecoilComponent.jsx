import React, { useState } from "react";
import { useSetRecoilState, RecoilRoot, useRecoilValue } from "recoil";
import { counterAtom, isEvenSelector } from "../store/atoms/counter";

const RecoilComponent = () => {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
};
function Counter() {
  return (
    <span>
      <Count />
      <Increase />
      <Decrease />
      <IsEvenComponent />
    </span>
  );
}
function Count() {
  const count = useRecoilValue(counterAtom);
  return <span>{count}</span>;
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <span style={{ padding: 10, margin: 10 }}>
      <button onClick={() => setCount((prev) => prev + 2)}>Increase</button>
    </span>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <span style={{ padding: 10, margin: 10 }}>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </span>
  );
}

function IsEvenComponent(){
  const isEven = useRecoilValue(isEvenSelector)
  return <div>
    {isEven ? "EVEN" : "ODD"}
  </div>
}
export default RecoilComponent;
