
// 1.	
// Define a function max() that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript
function max(number1,number2){
    return (number1>number2)?number1:number2
}
let x=5, y=9;
console.log("Number 1:");
console.log(max(x,y));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(number1,number2,number3){
    return((number1>number2)?
                ((number1>number3)?number1:number3) :(number2>number3)?number2:number3   );
}
console.log("Number 2:");
let a = 44,b=4,c=32;
console.log(maxOfThree(a,b,c));
// 3.
// Write a function isVowel() that takes a character (i.e. a string of length 1) 
// and returns true if it is a vowel, false otherwise.
function isVowel(character){
    var vowels = ['a','e','i','o','u'];
    return vowels.includes(character);
}
console.log("Number 3:");
let char="a";
console.log(isVowel(char));
// 4.	
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. 
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. 
// Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
function sum(input){
    let sum = 0;
    input.forEach(element => { sum+=element; });
    return sum;
}
function product(input){
    let product=1;
    input.forEach(el=>{ product*=el; });
    return product;
}
console.log("Number 4:");
let arr = [1,2,3,4];
console.log("sum "+sum(arr)+ " product "+ product(arr));
// 5.
// Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(input){
    let outputString="";
    for(let i=0; i<input.length; i++){
        outputString += input.charAt(input.length-1-i);
    }
    return outputString;
}
console.log("Number 5:");
let string = "jag testar";
console.log(string +" reversed is "+reverse(string));
// 6.
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(wrdArr){
    let longest, longestLength = 0;
    wrdArr.forEach(ele=>{if(ele.length>longestLength){ 
                                longest = ele;}});
    return longest;
}
console.log("Number 6:");
let myWords = ["house","elevator","encylopedia","sheep","mississipi","bee","up","liquidator"]
console.log(findLongestWord(myWords));
// 7.	
// Write a function filterLongWords() that takes an array of words and an integer i 
// and returns a new array containing only those words that were longer than i characters.
function filterLongWords(wrd,l){
    let out = [];
    wrd.forEach(el=>{if(el.length>l){ out.push(el);  }  }  );
    return out;
}
console.log("Number 7:");
let words = ["house","elevator","cow","sheep","mississipi","bee","up","liquidator"];
let i = 5;
console.log(filterLongWords(words,i));
// 8.
// Write a function named, computeSumOfSquares, that takes as input, an array of numbers 
// and calculates and returns the sum of the squares of each number in the input array. 
// E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. 
// Note: Write your Javascript code without using Imperative programming. 
// i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.
function computeSumOfSquares(numArr){
    let out=0;
    numArr.forEach(e=>out+=e*e);
    return out;
}
let numbers = [1,2,3,4];
console.log(computeSumOfSquares(numbers));
// 9.	
// Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers 
// and it finds and prints only the numbers which are odd.
function printOddNumbersOnly(numArr){
    let out = [];
    numArr.forEach(ele=>{if(ele%2!=0){out.push(ele);}});
    return out;
    // return numArr.filter(t=>t%2!==0);
}
console.log("Number 9:");
let sampleArr = [12,41,33,56,7,18];
console.log(printOddNumbersOnly(sampleArr));
// 10.	
// Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, 
// an array of integral numbers and calculates and returns the sum of the squares of only the even numbers in the input array. 
// E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.
function computeSumOfSquaresOfEvensOnly(inputArr){
    /*let sqSum = 0;
    inputArr.forEach(element=>{if(element%2==0){ sqSum += element*element; } });
    return sqSum;*/
    return inputArr.filter(t=>t%2===0)
                    .map(t=>t*t)
                    .reduce((a,b)=>a+b);
}
console.log("Number 10:");
let numberArray = [1,2,3,4,5];
console.log(computeSumOfSquaresOfEvensOnly(numberArray));
// 11.	
// Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…)
//  (defined in Problem 4 above) without using Imperative programming. 
//  i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. 
function sum2(inputArr){
    return inputArr.reduce((a,b)=>a+b);
}
function product2(inputArr){
    return inputArr.reduce((a,b)=>a*b);
}
console.log("Number 11:");
let arr2 = [1,2,3,4];
console.log("sum "+sum2(arr2)+ " product "+ product2(arr2));
// 12.	
// Implement Javascript code for a function named, findSecondBiggest, 
// which takes as input, an array of numbers and finds and returns the second biggest of the numbers. 
// For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12.
//  (Note: Do not use sorting!)
function findSecondBiggest(inputArr){
    if(inputArr.length<2){return null;}
    if(inputArr[0]>inputArr[1]){  let biggest = inputArr[0]; let second = inputArr[1];
    }else{ biggest = inputArr[1];  second = inputArr[0];  }

    for(let i=2;i<inputArr.length;i++){
        if(inputArr[i]>biggest){
            second = biggest; biggest = inputArr[i];
        }else if(inputArr[i]>second){
            second = inputArr[i];
        }
    }
    return second;
}
console.log("Number 12:");
let testArray = [1,2,3,4,5];
console.log(findSecondBiggest(testArray));
// 13.
// Write a function named printFibo, that takes as input, a given length, n, 
// and any two starting numbers a and b, and it prints-out the Fibonacci sequence, 
// e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. 
// (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; 
// printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output;
//  printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; 
//  printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; 
//  and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
function printFibo(n,a,b){
    let counter =0; let out = [a,b];
    while(counter < n-2){
        out.push(out[counter]+out[counter+1]);
        counter++;
    }
    return out;
}
console.log("Number 13:");
let length = 6, starterA = 0, starterB = 1;
console.log(printFibo(length,starterA,starterB));
