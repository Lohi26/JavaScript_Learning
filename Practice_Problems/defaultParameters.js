//default parameters are introduced in ES6

const calculate=function(a,b,c=3)
{
    let ans=a+b+c;
    console.log(a,b,c,a+b+c);
}
calculate(1);
calculate(1,undefined,5);
calculate(undefined,2,3,5);