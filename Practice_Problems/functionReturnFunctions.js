const message=function(str)
{
    return function (ch)
    {
        console.log(str+ch);
    };
};
// message("Hi");
const mess=message("Hii");
mess("Lohita");
mess("CP");
message("Hii")("Lohita");


const arrow= str => ch  => console.log(str+" "+ch);
arrow("Hii")("Lohita");

const year= (birthYear,str) => 
{
    return [str,2024-birthYear];
};
console.log(year(2003,"Lohita"));