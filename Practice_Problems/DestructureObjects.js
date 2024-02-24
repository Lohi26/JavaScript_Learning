const resturant={
    name: "Oxyz",
    location: "coimbatore",
    categories: ["Italian","vegetarian","pizzeria","Organic"],
    starterMenu:["bread omlet","pani puri","samosa"],
    mainMenu: ["pizza","pasta","rixato"],
};


const {categories,starterMenu,mainMenu}=resturant;
console.log(categories,starterMenu,mainMenu);
console.log(categories);

//for changes the names of the object names 
const {categories:cate, starterMenu:start,mainMenu:main}=resturant;
console.log(cate,start,main);


let Hisname="vp";
let Hername="Lohi";
const obj={
    Hisname:"vidhyapathi",
    Hername:"Lohita",
    HisAge:"22",
    HerAge:"20",
    personal: {
        hisDegree:"BE ECE",
        herDegree:"BE CSE",
        hisJob:"SAP Expersitor",
        herJob:"Full stack developer",
    }
};
({Hisname,Hername}=obj);
console.log(Hisname,Hername);

const detail={
    Hisname:Husband,
    Hername:Wife,
    HisAge:husbandAge,
    HerAge:wifeAge,
}=obj;
console.log(Husband,husbandAge);
console.log(Wife,wifeAge);


const details={
    Hisname:"vidhyapathi",
    Hername:"Lohita",
    HisAge:"22",
    HerAge:"20",
    personal: {
        hisDegree:"BE ECE",
        herDegree:"BE CSE",
        hisJob:"SAP Expertisor",
        herJob:"Full stack developer",
    },

};

const {Hisname:Name,HisAge:age,personal:{hisDegree:degree,hisJob:job}}=details;
console.log(Name+"\n"+age+"\n"+degree+"\n"+job);



const information={
    statrUpName:"Spring Up Solutions",
    Hisname:"vidhyapathi",
    Hername:"Lohita Vidhyapathi",
    HisAge:"22",
    HerAge:"20",
    location:"Coimbatore",
    slogan:"Spring Up Solutions is far more than just a changing of seasons, It's a rebirth of your Identity..!",
    personal: {
        hisDegree:"BE ECE",
        herDegree:"BE CSE",
        hisJob:"SAP Expertisor",
        herJob:"Full stack developer",
    },
    orders:["project planning", "sales strategy", "market analysis", "UX design", "user interface design","Websites design", "manage the databases that power SAP systems","MERN websites"],
    orderDetails: function(object){
        console.log("ChairMan Mr."+object.chairman+" and our beloved CEO Mrs."+object.CEO+" welcomes you to the inauguration function of "+this.statrUpName+", Let's begin our new beginning");
        console.log(information.slogan);
    }
};
// console.log(information);
information.orderDetails({
    chairman:information.Hisname,
    CEO:information.Hername,
});
