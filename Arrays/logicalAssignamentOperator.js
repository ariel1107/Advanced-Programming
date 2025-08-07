const rest1 = {
  name: "Capri",
  numGuest: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

//      Same as:

rest1.numGuest ||= 10;
rest2.numGuest ||= 10;
console.log(rest1);
console.log(rest2);

// if the number of guest is 0 which it could be completely normal is gonna return 10 because (0) is a falsy value
rest1.numGuest = 0;

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
console.log(rest1);
console.log(rest2);

// if you want to anonymize the owner of the restaurant 2 you would do it like this :
rest2.owner &&= "<ANONYMOUS>";
console.log(rest2);
// rest1.owner &&= '<ANONYMOUS>' is gonna return owner as a new property os rest1 with a value of undefined.
