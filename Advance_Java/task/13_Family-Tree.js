let grandfather = {
  name: "Monanlal Bhai",
  age: 80,
  child: [
    {
      id: "001",
      name: "Hasmukh Bhai",
      age: 50,
      child: [
        {
          name: "Rani",
          age: 28,
        },
        {
          name: "Tejas",
          age: 25,
        },
        {
          name: "Raj",
          age: 20,
        },
      ],
      vahicle: [
        {
          bike: "unicorn",
          color: "Dark Blue",
        },
      ],
    },
    {
      id: "002",
      name: "Vishwas Bhai",
      age: 55,
      child: [
        {
          name: "Sweety",
          age: 27,
        },
        {
          name: "Mahima",
          age: 24,
        },
        {
          name: "Piyush",
          age: 22,
        },
      ],
      vehicle: [
        {
          car: "ciaz",
          color: "blue",
        },
      ],
    },
    {
      id: "003",
      name: "Yuvraj Bhai",
      age: 60,
      child: [
        {
          name: "Shetal",
          age: 25,
        },
        {
          name: "Prasad",
          age: 20,
        },
      ],
      vehicle: [
        {
          car: "Swift",
          color: "White",
        },
      ],
    },
  ],
};

// console.log(grandfather.child[2].child[1].age)
console.log(grandfather.child[0].child[1].name);