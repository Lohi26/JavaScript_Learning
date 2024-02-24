
const arr=[1,2,3,4,5];
const map=new Map();
map.set("Lohita","Vidhyapathi");
map.set("Lohi","vp")
map.set(arr,object={
    name:"Lohita",
    age:21,
    job:"Software developer",
    nationality:"Indian"
}),
console.log(map.get("Lohita"));
console.log(map.get("Lohi"));
console.log(map.get(arr));

for(const [key,value] of map)
{
    console.log(key+" "+value);
}


//when using get method data type if the key is important
//get will return the value when we use the key
//get will return undefined when we use the value


//conversion of object into map

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const objMap = new Map(Object.entries(game.odds));
console.log(objMap);

for(const [key,value] of objMap)
{
    console.log(key+" "+value);
}


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const quizzGame = new Map([
  ["Question", "What is arthi's current salary?"],
  [1, "1,00,000"],
  [2, "2,00,000"],
  [3, "3,00,000"],
  ["true", "correct🥳🥂"],
  ["false", "Wrong!🥲"]
]);
// console.log(quizzGame.get("Question"));
// console.log("Choose the correct answer:");
// for(const [key, value] of quizzGame) 
// {
//     if(typeof key === 'number') 
//     {
//         console.log(`Option ${key} : ${value}`);
//     }
// }
// rl.question("Enter the answer: ", function(user) 
// {
//     if(user === "3,00,000") 
//     {
//         console.log(quizzGame.get("true"));
//     } 
//     else 
//     {
//         console.log(quizzGame.get("false"));
//     }
//     rl.close();
// });


///covert map to array

const arr6=[...quizzGame];
for(const j of quizzGame.values())
{
    console.log(j);
}