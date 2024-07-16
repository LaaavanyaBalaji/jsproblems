// //program1
// let itr;
// for(itr=1;itr<=100;itr++)
// {
//     if(itr%3==0 && itr%5!=0)
//         document.writeln("fizz,");
//     else if(itr%3!=0 && itr%5==0)
//         document.writeln("bus,");
//     else if(itr%3==0 && itr%5==0)
//         document.writeln("fizzbus,");
//     else 
//     document.writeln(itr+",");
// }
// //factorialptogram6
// function fact(num){
// let fact=1,itr1;
// for(itr1=1;itr1<=num;itr1++)
// {
//   fact=fact*itr1;
 
// }
// return fact;

// }
// console.log("The factorial is " +fact(6));

// //arrLargestNumber
// function larnum(arr){
//     arr.sort();
//     return arr[arr.length-1];
// }
// let arr=[1,2,3,4,5,6];
// console.log("The largest Number in the array is "+larnum(arr));

// //fahrenheittocelsius
// function toCelsius(temp){
//     return celsius=(temp-32)*5/9;

// }
// console.log("Temperature from fahrenheit to celsius is "+toCelsius(100));

//

// //missing number
// function missNum(arr){
//    let  n=arr[arr.length-1];
//     let sum=(n*0.5)*(n+1);
//     let i,sum1=0;
//     for(i=0;i<arr.length;i++)
//         sum1=sum1+arr[i];
//     return sum-sum1;

// }
// let arr1=[1,2,3,4,5,6,7,8,10];
// console.log(missNum(arr1));

// //longest
// function longest(str) {
//     let arr = str.split(' ');
//     let long= 0;
//     let arrl=null;
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i].length > long){
//       long = arr[i].length;
//       arrl=arr[i];
//        }
//     }
//     return arrl ;
//   }
//   console.log(longest("I am Laaavanya Balaji");

//1.creating an array
let arr=["Mango","Apple","Banana"]
console.log(arr);

//2.array Manipulation
//pop
let arr1=[1,2,3,4]
console.log(arr1.pop())//returns last element
console.log(arr1)
//shift
let arr2=[1,2,3,4]
console.log(arr2.shift())//returns first element
console.log(arr2)
//push
let arr3=[1,2,3,4];
arr3.push(5);//adds element at last
console.log(arr3);
//unshift
let arr4=[1,2,3,4];
arr4.unshift(0);//adds element at first
console.log(arr4);

//3.using split,reverse and join to check if palindrome or not
function Palindrome(str1){
 let str2=(str1.split("").reverse().join(""));
    if (str1==str2)
        return("Palindrome");
    else
       return("Not a Palindrome");
    
    }
    console.log(Palindrome("malayalam"));

//4.using sort to identify the  second largest number in array and array maximum and minimum
let arrSecLar=[1,3,2,7,5,4,9];
arrSecLar.sort();
console.log("The Second Largest Number in the array is "+arrSecLar[arrSecLar.length-2]);
console.log("The Maximum number is "+arrSecLar[arrSecLar.length-1]);
console.log("The Minimum Number is "+arrSecLar[0]);

//5.mapping and arrow 
let oddnum=[1,3,5,7,9,11,13,15];
let evennum=oddnum.map(x => x+1);
console.log("Even numbers are "+ evennum);

//6.flattening array
let arr5=[1,2,3,[4,5],[6,7]];
console.log(arr5.flat());

//7.Array spreading
let num2=[1,2,3,4];
let num3=[5,6,7,8];
console.log(...num2,...num3);

//8.first occurence 
let arr6=[1,1,2,2,3,3,3,4,6];
console.log(arr6.indexOf(3));//3 comes in indexes(4,5,6) but indexOf() returns first occurence which is 4

//9.intersection of two arrays
let int1=[1,2,3,4,5];
let int2=[2,4,6,8,10];
let itr1,itr2;
let inter=[];
for(itr1=0;itr1<int1.length;itr1++)
{
    for(itr2=0;itr2<int2.length;itr2++)
    {
        if(int1[itr1]==int2[itr2])

            inter=int1[itr1];
            

    }
    console.log(inter);
}

//merging two arrays
let mer1=[1,2,3,4]
let mer2=[5,6,7,8]
console.log(mer1.concat(mer2));