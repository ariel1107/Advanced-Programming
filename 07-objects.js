const jonas = {
  firstName: "Jonas",
  lastName: "Shmedtmann",
  birthday: 1998,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2025 - this.birthday;
    return this.age;
  },

  getSumary: function () {
    console.log(
      `${
        this.firstName
      } is a ${jonas.calcAge()} years old teacher, and he has ${
        this.hasDriversLicense ? "a" : "no"
      } driver's license`
    );
  },
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

console.log(jonas.calcAge());

jonas.getSumary();
