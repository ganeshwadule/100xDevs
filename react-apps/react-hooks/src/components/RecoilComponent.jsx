import React, { useState } from "react";
import { useSetRecoilState, RecoilRoot, useRecoilValue } from "recoil";
import { counterAtom } from "../store/atoms/counter";

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
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
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

export default RecoilComponent;
