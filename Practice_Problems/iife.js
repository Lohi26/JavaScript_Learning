
//the below function can be called numerous number of times without any restictions
function calling(){
    console.log("Hai! How have been you doing?");
}
calling();


//the below function can be called only once 

(function(){
    console.log("Hello! How are you?");
})();

({
    num:100
});
console.log(num);