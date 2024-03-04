const arr=[1,2,3,4,5];
const arr1=arr.reduce((sum=1,ar) => sum*ar);
console.log(arr1);




const arr2=arr.reduce(function(acc,ar,i){
    console.log(ar+" "+i);
    console.log(acc);
    return acc*ar;
},1);
console.log(arr2);