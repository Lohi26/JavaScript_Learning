const information={
    statrUpName:"Spring Up Solutions",
    Hisname:"vidhyapathi",
    Hername:"Lohita Vidhyapathi",
    HisAge:"22",
    HerAge:"20",
    location:"Coimbatore",
    slogan:"Spring Up Solutions is far more than just a changing of seasons, It's a rebirth of your Identity..!",
    openingHours:{
        mon:[10,6],
        tue:[10,5],
        wed:[10,4],
        thus:[10,3],
        fri:[10,2]
    },
    personal: {
        hisDegree:"BE ECE",
        herDegree:"BE CSE",
        hisJob:"SAP Expertisor",
        herJob:"Full stack developer",
    },
    orders:["project planning", "sales strategy", "market analysis", "UX design", "user interface design","Websites design", "manage the databases that power SAP systems","MERN websites"],
    orderDetails(object){
        console.log("ChairMan Mr."+object.chairman+" and our beloved CEO Mrs."+object.CEO+" welcomes you to the inauguration function of "+this.statrUpName+", Let's begin our new beginning");
        console.log(information.slogan);
    }
};
console.log(information?.fatherName);
console.log(information?.HisAge);
console.log(information?.personal?.hisDegree);

console.log(information.orders);
const weekdays=["mon","tue","wed","thus","fri","sat","sun"];
for(const i of weekdays)
{
    const [j,k]=information.openingHours?.[i] ?? [];
    if(j==null || k==null)
    console.log(`On ${i} Spring Up Solutions will be closed`);
    else
    console.log(`On ${i} Spring Up Solutions will opens at ${j} and closes at ${k}`);
}

const week=[
    {
        name:"Lohita",
        age:20,
        degree:"BE CSE",
        place:"Coimbatore",
        College:"Karpagam College of Engineering"
    }
];
console.log(week[0]?.hobbies ?? "🥳");


for(const jk of Object.values(information.personal))
{
    console.log(jk);
}


const arr=Object.values(information);
console.log(arr);

for(const x of arr)
{
    console.log(x);
}

//when we pass it in seperate array it will be stored as array..