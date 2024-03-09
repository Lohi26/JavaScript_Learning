const arr=Array.from({length:10},()=>1);
console.log(arr);


const arr1=Array.from({length:10},(ele,i)=>i+1);
console.log(arr1);


//by this method we can create new array using the call back function
//it works same as the map method
//here the call back function in the map method is passed as a argument in from method
