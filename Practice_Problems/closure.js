const lohita=function(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
};
lohita();

const func=lohita();
func();
func();
func();
func();


console.dir(func);


// lohita()();
// lohita()();
// lohita()();
// lohita()();


const a=function(){
    let flag=0;
    b=function(){
        console.log(++flag);
    }
};


const c=function(){
    let d=123;
    b=function(){
        console.log(++d);
    }
};

a();
b();
b();


c();
b();
b();