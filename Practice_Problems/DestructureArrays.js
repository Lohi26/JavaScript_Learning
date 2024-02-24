const arr=[1,2,3];
let [a,b,c]=arr;
//destructuring the array
console.log(a,b,c);


const resturant={
    name: "Oxyz",
    location: "coimbatore",
    categories: ["Italian","vegetarian","pizzeria","Organic"],
    starterMenu:["bread omlet","pani puri","samosa"],
    mainMenu: ["pizza","pasta","rixato"],
};
let [first,second]=resturant.categories;
console.log(first,second);

//swaping the variables this method is very useful instead of using the temporary variables
[first,second]=[second,first];
console.log(first,second);


//nested destructuring
let nums=[1,2,[3,4]];
const [i,j,[k,z]]=nums;
console.log(i,j,k,z);


const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[ ,rating],[ ,ratingCount]]=ratings;
console.log(rating,ratingCount);



//default values in destructuring
const ratingStars = [63405, 1808];
const [oneStartRatings,twostartRatings,threeStartRatings=0]=ratingStars;
console.log(oneStartRatings,twostartRatings,threeStartRatings);