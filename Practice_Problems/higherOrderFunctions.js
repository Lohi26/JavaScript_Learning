const lowercase=function(str){
    console.log(str.toLowerCase());
    return str.toLowerCase();
}
const uppercase=function(str)
{
    console.log(str.toUpperCase());
    return str.toUpperCase();
}
const main=function(str, fn)
{
    console.log(str);
    console.log(fn(str));
}
main("JAVASCRIPT",lowercase);
main("reactjs",uppercase);


//here main is the higher order function and lowercase and uppercase are call back function