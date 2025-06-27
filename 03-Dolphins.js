const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;

console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (avgDolphins === avgKoalas && avgDolphins >= 100) {
  console.log("there is a draw...");
} else {
  console.log("no team win the trophy 😭");
}
