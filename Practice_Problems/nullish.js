/// nullish operator works as like as OR operator
/// it was intoduced in ES20
/// the concept and the usage of not falsy values but with nullish values such as undefined and null niether of 0 and '' 
/// 0 and '' are neither false values or true values


console.log("lohita" ?? "vidhyapathi");
console.log(""??"vidhyapathi");
console.log(0||10);
console.log(undefined ?? 123);
console.log(null || null);
console.log(null ?? 123012);


console.log( "vidhyapathi" ?? "lohita");
console.log("vidhyapathi" ?? "");
console.log(10||0);
console.log( 123??undefined);
console.log(null || null);
console.log(123012 ?? null);