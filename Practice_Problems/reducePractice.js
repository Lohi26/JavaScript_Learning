nums=[1,2,3,4]
const finalNum=[]
let acc=0;
nums.reduce(function(acc,ele){
    finalNum.push(acc+ele);
    return acc+2;
},acc);
console.log(finalNum);