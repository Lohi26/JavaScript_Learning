const date1=new Date(2024,10,26);
const date2=new Date(2024,10,6);

const diff=Math.abs(date1-date2);
const numberOfDays=diff/(1000*60*60*24);
console.log(numberOfDays);