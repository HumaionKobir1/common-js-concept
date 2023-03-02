function sum(a, b, c){
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}

const total = sum(45, 24, 65, 54, 78, 97);
// console.log(total)