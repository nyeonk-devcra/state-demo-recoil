"use client";

import { useRecoilState } from "recoil";
import { counterState } from "@/recoil/counterState";

const Counter = () => {
  const [, setCount] = useRecoilState(counterState);

  const increase = () => {
    setCount((prevCount: number) => prevCount + 1);
  };

  const decrease = () => {
    setCount((prevCount: number) => prevCount - 1);
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={increase}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
      >
        +
      </button>
      <button
        onClick={decrease}
        className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
