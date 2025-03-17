import { atom } from "recoil";

const counterState = atom({
  key: "countState",
  default: 0,
});

export { counterState };
