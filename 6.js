/*Filter Even Numbers
Given an array of numbers, return an array of only the even numbers.
Input: [1, 2, 3, 4, 5,6]
Expected Output: [2, 4, 6]*/


/*var x =[1, 2, 3, 4, 5, 6];
function getEvenNumbers(z){
    let evenNumber = [];
    z.forEach(num =>{
        if (num % 2===0){
            evenNumber.push(num);
        }
    });
    return evenNumber;
}
var y= getEvenNumbers(x);
console.log(y);*/


var x=[1, 2, 3, 4, 5, 6];
var y =x.filter(num =>num%2===0);
  

console.log(y);