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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};

// 1.
for (const [index, player] of game.scored.entries()) console.log(`Goal ${index + 1}: ${player}.`);

// 2.
let sum = 0;
for (const value of Object.values(game.odds)) {
    sum += value;
}
console.log(sum / Object.entries(game.odds).length);

// 3.
for (const [name, value] of Object.entries(game.odds)) name === 'x' ? console.log(`Odd of draw: ${value}`): console.log(`Odd of victory ${game[name]}: ${value}`);

// 4.
const scorers = {};

