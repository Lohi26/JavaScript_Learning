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

// const players1=game.players[0];
// const players2=game.players[1];

//OR

const [players1,players2]=game.players;

// console.log(players2);

const [gk,...fieldPlayers]=players1;

// console.log(gk);
// console.log(fieldPlayers);

const allPlayers=[...players1,...players2];

// console.log(allPlayers);

const players1Final=[...players1,"Thiago","Coutinho","Perisic"];

// console.log(players1Final);

const {odds:{team1,x:draw,team2}}=game;

// console.log(team1);
// console.log(draw);
// console.log(team2);

const printGoals= function(...goals){
    console.log(`${goals.length} goals were scored...!`);
}

printGoals('Lewandowski', 'Gnarby', 'Lewandowski');
printGoals(...game.scored);


team1>team2 && console.log("Team 1 wins");
team1<team2 && console.log("Team 2 wins");