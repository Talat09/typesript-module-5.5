import * as Methods from "./module"; //wild card import
// import { add as addTwo, substruct } from "./module";
const add = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};
// const res = addTwo(20, 19);
const res = Methods.multiply(20, 19); //
const res1 = Methods.add(20, 19); //
console.log("multiply:", res, "addition:", res1);
