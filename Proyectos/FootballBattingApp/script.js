/*
We're building a football betting app (soccer for my American friends! 

Suppose we get data from a web service about a certain game (bellow). In this challenge we're gonna work with that data. 

Your tasks: 
1. Create one player array for each team (variables 'players1' and 
'players2') 
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players 
3. Create an array 'allPlayers' containing all players of both teams (22 
players) 
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic' 
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2') 
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in) 
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator. 
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored 
GOOD LUCK 
*/

"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Never",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["lewandowski", "Gnarby", "lewandowski", "Hummels"],
  date: "nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let [players1, players2] = game.players;
console.log(players1);
console.log(players2);

const [gK, ...fieldPlayers] = players1;
console.log(gK, fieldPlayers);
const [goalkeeper, ...field] = players2;
console.log(goalkeeper, field);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

function printGoals(...players) {
  console.log(`${players.length} goals were scored by ${players}`);
}

printGoals(
  "Davies",
  "Muller",
  "Lewandowski",
  "Kimmich",
  "lewandowski",
  "persic"
);

printGoals(...game.scored);

team1 < team2 && console.log("Bayern is more likely to win");
team1 > team2 && console.log("Bayern is more likely to win");

//coding challenge #2:

for (const [i, name] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${name}`);
}

const values = Object.values(game.odds);
console.log(values);
let sum = 0;

for (const valores of values) {
  sum += valores;
}

console.log(sum);
let avg = sum / values.length;
console.log(avg);

const objectOdd = Object.entries(game.odds);
console.log(objectOdd);

for (const [team, odd] of objectOdd) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`; // because in object there is a property that have the exact same name so when the computer is looking for the team property it is gonna log both properties team1 and team2...
  console.log(`Odd of ${teamStr} ${odd}`);
}
