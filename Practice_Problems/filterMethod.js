const arr=[200,450,-400,3000,-650,-130,70,1300];

const arr1=arr.filter( ar =>  ar<0);
console.log(arr1);


//or

const newArr=[];
for(const i of arr)
{
    if(i<0)
    newArr.push(i);
}
console.log(newArr);