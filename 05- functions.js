const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAvg = calcAverage(85, 54, 41);
const koalasAvg = calcAverage(23, 34, 27);

console.log(dolphinsAvg, koalasAvg);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("NO team wins!");
  }
}

checkWinner(dolphinsAvg, koalasAvg);
