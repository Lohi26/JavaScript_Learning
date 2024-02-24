//both in objects and array spread operator can be used



const arr=[1,2,3,4,5];
console.log(...arr);
//completing creating the new array not manipulating the previous array..
const newarr=[6,7,8,...arr,9,10];
console.log(...newarr);


//this spread operator is mainly used for copying the one to another array
//also used for merging thre arrays

const arr1=[1,2,3];
const arr2=[4,5,6];
const nums=[...arr1,...arr2];
console.log(...nums);


const str="Lohita";
const ch="cp";
const name=[...str,...ch];
console.log(name);


//spread operator cannot be used inside the template literals


const arr19=[1,2,3,4,5];
const [arr26,vp,...arr96]=[1,2,1,2,3,4,5];
console.log(arr26);
console.log(arr96);


///....dots will collect the rest of the elements and does not include the skipped elements




function add(...numbers)
{
    let sum=0;
    for(let i=0;i<numbers.length;i++)
    {
        sum+=numbers[i];
    }
    return sum;
}
console.log(add(1,2,3,4,5));
const numss=[1,2,3,4,5,6];
console.log(add(...numss));

//in the above example the number of arguments you aree passing will be taken in the array if the arguments are more
