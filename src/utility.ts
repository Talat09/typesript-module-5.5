// pick
// generic type er vitor je property gula dibo oi gula nibe
interface Person {
  name: string;
  email: string;
  contactNo: string;
}
type Contact = Pick<Person, "contactNo" | "email">;
// Omit
// generic type er vitor je property gula dibo oi gula baad diye baki gula nibe
type Name = Omit<Person, "email" | "contactNo">;
// partial
//To make all the properties be optional
type Optional = Partial<Person>;
// make all the properties be must required
type RequiredProps = Required<Person>;
//ReadOnly
const person: Readonly<Person> = {
  name: "Talat Mahmud",
  email: "abc@gmail.com",
  contactNo: "343535435",
};
console.log(
  "ContactNo:",
  person.contactNo,
  "Email:",
  person.email,
  "Name:",
  person.name
);
//Record Type
// type myObj = {
//   a: string;
//   b: string;
//   c: string;
// };
//using index signature
// type myObj = {
//   [key: string]: string;
// };
// for selective property eivhabe use kora jave nah
// type myObj = {
//   [key: 'a'|'b'|'c']: string;
// };
//using Record utility
//record bole dile [key:'a'|'b'|'c']
type myObj = Record<"a" | "b" | "c" | "d", string>;
const obj: myObj = {
  a: "d",
  b: "rr",
  c: "ttt",
  d: "d",
};
