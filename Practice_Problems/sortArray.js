//Numbers
const arr=[10,20,30,4,52,48,30,2,9,74];
//Ascending order
arr.sort((a,b) => {
    if(a>b) return ;
    if(b>a) return -1;
});
console.log(arr);

//descending order

const arr1=[10,20,30,4,52,48,30,2,9,74];
arr1.sort((a,b)=> {
    if(a>b) return -1;
    if(b>a) return 1;
});
console.log(arr1);




//when we sort the strings call back function is not required


const str=["abi","zeeva","life","random","call"];
str.sort();
console.log(str);


const array=[10,20,30,4,52,48,30,2,9,74];

array.sort((a,b) => b-a);
console.log(array);


//the another way for sorting is using the difference operaor
//a-b ------->ascending order
//b-a ------->descending order