// logical assignment operator created in ES22

const rythm={
    hall: 1,
    kitchen: 1,
    bedroom: 6,
    guestroom: 2
};

const family={
    Fname:"Chandrasekaran",
    Mname:"Padmavathi",
    Bname:"Sanjay Karthik",
    Myname:"Lohita"
};
family.Hname ||="cp";

family.Lname=family.Myname && "Sudha";

family.Faname ??="Nagaraj";



console.log(family);