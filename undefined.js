/**
 * 8 ways to get undefine
 1.variable that is not initialized will give undefine
 2. function with no return will give undefine
 3. Parameter that is not passed will be undefined
 4. if return has nothing on the right side side will retun undefined
 5. property that doesnt exists on an object will you give undefined
 6. accessing array elements outside of the index range will give you undefined
 7. deleting an element inside an array;
 8. set a value direcly to undefined 
 */

 let first;
 console.log(first)

 function second(a, b){
    const total = a + b;
 }
 const result = second();
 console.log(result);


 function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
 }
 third(2, 5)

 function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b
 }
 const total = noNegative(2, -5);
 console.log(total);

 const fifth = {id: 5, name: 'Humaion Kobir', age: 24};
 console.log(fifth.age, fifth.salary);

 const sixth = [4, 5, 6, 7, 8, 9];
//  you should not do it. Instead use splice
 delete sixth[1];
 console.log(sixth);
//  console.log(sixth[1], sixth[5], sixth[10]);

const eight = undefined;
console.log(eight);

