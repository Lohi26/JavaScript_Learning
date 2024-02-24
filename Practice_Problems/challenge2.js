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


//1.
for(const i of game.scored.entries())
{
    console.log(`Goal: ${i[0]+1}: ${i[1]}`);
}


//2.
const arr=Object.values(game.odds);
let sum=0;
for(const j of arr)
{
    sum+=j;
}
console.log(sum/3);



//3.
console.log(`Odd of victory ${game.team1}: ${arr[0]}`);
console.log(`Odd of draw: ${arr[1]}`);
console.log(`Odd of victory ${game.team2}: ${arr[2]}`);


//4.
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);