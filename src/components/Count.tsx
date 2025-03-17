"use client";

import { useRecoilValue } from "recoil";
import { counterState } from "@/recoil/counterState";

const Count = () => {
  const count = useRecoilValue(counterState);

  return <strong className="text-2xl font-bold">{count}</strong>;
};

export default Count;
