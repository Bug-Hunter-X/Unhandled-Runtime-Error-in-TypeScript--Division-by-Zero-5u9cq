function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6
const result3 = multiply(7, 2); // 14

let result4: number | string = "";

try {
  result4 = divide(9, 3); // 3
} catch (e: any) {
  result4 = e.message; 
}

let result5: number | string = "";

try {
  result5 = divide(10,0); // throws error
} catch (e: any) {
  result5 = e.message; 
}

console.log(result1, result2, result3, result4, result5); 