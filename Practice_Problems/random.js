console.log(23===23.0);

console.log(0.1+0.2);

console.log(1/10);

console.log(3/10);

console.log(0.1+0.2===0.3)

console.log("23");
console.log(Number("23"));
console.log(+"23");  //type coersion

const str="Lohita";
Array.from(str).forEach((ch,i) =>  console.log(ch,i));


const arr=[1,2,3,4,5,6];
arr.forEach( (ele,i) => console.log(ele,i));

for(const [i,ele] of arr.entries())
console.log(ele,i)