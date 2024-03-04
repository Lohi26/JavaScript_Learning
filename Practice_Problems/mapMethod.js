const arr=[1,2,3,4,5,6,7,8,9,10];

const arr2=arr.map(function(a){
    return 10*a;
});
console.log(arr);
console.log(arr2);


//used to some speicific operations 
//above there arr.map(function(a))
//here a represents the every single element in the arr
//and ecah time it returns the resulr of element*10
//and stores in arr2
//it works like forEach loop
//the oroginal array is not mutated as because it creates the new array



const arr3=arr.map(ar => 20*ar );
console.log(arr3);



const arr4=arr.map(function (ab,i,arr){
    console.log(arr);
    return (i+1)*ab;
});
console.log(arr4);