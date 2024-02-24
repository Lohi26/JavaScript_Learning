//for-of loop

const players= [
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
    ];
for(const i of players)
console.log(i);


for(const [j,k] of players.entries())
console.log(j+" "+k);


//here j[0] represents the number 
//and j[1] represents the elements in the array
