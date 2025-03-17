"use client";

import { atom, useRecoilValue } from "recoil";

// atom 선언
export const counterState = atom({
  key: "counterState",
  default: 0,
});

const Counter = () => {
  const counter = useRecoilValue(counterState);

  return (
    <div className="flex flex-1 items-center justify-center h-full">
      {counter}
    </div>
  );
};

export default Counter;
