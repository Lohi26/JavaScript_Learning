//PART 1

const str="Lohita chandrasekaran";
console.log(str[0]);
console.log("Lohi"[2]);
console.log(str.length);
console.log(str[0].length);
console.log(typeof str[0]);
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("a"));
console.log(str.slice(4));
console.log(str.slice(4,9));
console.log(str.slice(-1));


//Primitive data types 

//they are immutable and directly manipulated by the value
//they are stored in the memory 
//eg:String, Number, Boolean, Undefined, Null, Symbol


//Non primitive data types

//they are mutable and by references 
//they are not stored in thet memory but as references to the memory locations 
//eg: Object, Array, Function, Date, Regular expression


//PART 2
let nameStr="lOhiTA";
nameStr=nameStr[0].toUpperCase()+nameStr.slice(1).toLowerCase();
console.log(nameStr);


const nameCh="  Lohita Chandrasekaran   ";
console.log(nameCh.toUpperCase().trim());
console.log(nameCh.toUpperCase().trimStart());
console.log(nameCh.toUpperCase().trimEnd());



const nameSc="cp";
console.log(nameSc.replaceAll(/cp/g,"Lohita"));
console.log(nameSc.replace("i","l"));
console.log(nameSc.replaceAll("a","x"));


const nameing="Padmavathi";
console.log(nameing.toLowerCase().includes("padma"));
console.log(nameing.toLowerCase().startsWith("pa"));
console.log(nameing.toLowerCase().endsWith("thi"));




//PART 3
const sentences="The next greater element of some element";
console.log(sentences.split(" "));  //String array
console.log(sentences.split(" ").join(" 🥂 "));


const captial="loHitA";
console.log(captial.toLowerCase().replace(captial[0],captial[0].toUpperCase()));




const number=6380970118;
console.log(number.toString().slice(-3).padStart(number.toString().length,"*"));


const sl="ArthiKanagaraj";
console.log(sl.slice(5));


const myName="Lohita cp";
console.log(myName.repeat(10));


const s="arthikanagaraj@gmail.com";
let index=s.indexOf("@");
const c=s.substring(0,index);
console.log(c);