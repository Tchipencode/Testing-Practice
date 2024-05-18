import {analyzeArray,calculator, capitalize, caesarCipher} from "./functions";

const arr=[1,8,3,4,2,6];
const object = {
   average: 4,
   min: 1,
   max: 8,
   length: 6
 };
test("return an object with properties average, min ,max, length", ()=>{
   expect(analyzeArray(arr)).toMatchObject(object);
});


test("make calculation", ()=>{
   expect(calculator.add(1,2)).toBe(3);
   expect(calculator.divide(8,2)).toBe(4);
   expect(calculator.multiply(8,2)).toBe(16);
   expect(calculator.subtract(8,2)).toBe(6);
});

const regex=/(\b[a-z](?!\s))/g;
test("Capitalize first character", ()=>{
   expect(capitalize("montana")).toMatch("Montana");
});

const str="hello";
const s=3;
test("caesar shift cipher", ()=>{
   expect(caesarCipher(str, s)).toBe("khoor");
});

