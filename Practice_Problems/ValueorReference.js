const call=function(arr,str){
    str="Lohita cp";
    arr[0]=2;
    arr[1]=3;
    arr[2]=4;
    arr[3]=5;
    arr[4]=6;
}
const arr=[1,2,3,4,5];
const str="Lohita";

call(arr,str);
console.log(arr);
console.log(str);



//same as for objects,function,date,regualar expression etc....


//Here in the above example the string is not changed as it is the primitive data type
//Here the objects are being changed as it the non primitive data type and the new values changed to it is also present 
//in the memory but as the reference to the variable arr in the above example
