// #1 
let dog = {};

// #2
console.log(dog);

// #3
dog.name = "Milo";
dog.legs = 4;
dog.color = "White";
dog.bark = function () {
    return "Woof woof!";
}

// #4
console.log(Object.values(dog));

// #5
dog.breed = "Maltease";
dog.getDogInfo = function() {
    console.log(`${this.name} with ${this.legs} legs & ${this.color} fur` + this.bark);
}



// level 2
// #1
const users1 = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };
  
  console.log(`Object entries: ${Object.entries(users1)}`);
  let highNoOfSkills = 0;
  for (let key in users1) {
    if (users1[key].skills.length > highNoOfSkills) {
        highNoOfSkills = users1[key].skills.length;
        console.log(`Highest skillset is currently: ${key} with ${highNoOfSkills} skills`);
    }
  }

  // #2
  let count = 0;
let gte50Pts = 0;
  for (let key in users1) {
      if(users1[key].isLoggedIn) {
        count++;
      }
      if(users1[key].points >= 50) {
        gte50Pts++;
      }
  }

  console.log(`There are ${count} logged in users`);
  console.log(`There are ${gte50Pts} users with greater than or equal to 50 points`);

  // #3
  const mernStackers = [];
  for(let key in users1) {
      let skillsArray = users1[key].skills;
      if(skillsArray.includes('MongoDB') && skillsArray.includes('Express') && skillsArray.includes('Node') && skillsArray.includes("React")) {
          mernStackers.push(key);
      }
  }

  console.log(`Mern stackers: ${mernStackers}`);

   // #4
   let updatedUsers = Object.assign({"Ramandeep": {
       "email": "ramansb100@gmail.com",
       "skills": ["Java", "Javascript", "React", "HTML", "CSS", "MongoDB", "Node", "Python", "SQL"]
   }}, users1);

console.log(JSON.stringify(updatedUsers));

// #5 & 6
console.log(Object.keys(updatedUsers));
console.log(Object.values(updatedUsers)); 

// level 3
// #1
const personAccount = {
    firstName: "Ramandeep",
    lastName: "Toasti",
    incomes: [
        {
            income: 40000,
            description: "Software Dev"
        },
        {
            income: 10000,
            description: "Piano Gigs"
        }
    ],
    expenses: [
        {
            exepense: 15000,
            description: "Tax"
        },
        {
            expense: 10000,
            description: "Helping out at home"
        }
    ],
    totalIncome: 50000,
    totalExpenses: 25000,
    accountInfo: {
        sortCode: "20-67-90",
        accountNo: "12510472"
    },
    addIncome: function(amountToAdd) {
        this.totalIncome = amountToAdd + this.totalIncome;
    },
    addExpense: function(amountToAdd) {
        this.totalExpenses = amountToAdd + this.totalExpenses;
    }
};

personAccount.addIncome(500);
console.log(personAccount);

const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

  // #2a
  function signUp(user) {
      let totalNoOfUsers = users.length;
      for(let existingUser of users) {
        if (existingUser.username == user.username) {
            console.log(`User: ${user.username} already exists.`);
        }
      };
      const requiredProperties = Object.keys(users[0]).unshift(); //Removing _id as mongo db will add this upon entry/insertion
      for (let prop in requiredProperties) {
            let result = Object.keys(user).includes(prop);
            if(!result) {
                console.log(`Unknown property detected: ${prop}`);
            }
      }
      users.push(user);
  }
console.log(users);
signUp({});
signUp({username: 'Thomas'});
signUp({      
    username: 'Jacob',
    email: 'jacob@lemarc.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
});
console.log(users);

// #2b
function signIn(user) {
    for (let existingUser of users) { 
        console.log(existingUser);
        if (existingUser.username == user.username && existingUser.password == user.password){  // In an actual signin method hashing (bcryptjs) would be required to decrypt the password read in from db (as it woudl already be hashed)
                console.log(`User: ${user.username} has successfully signed in.`);
            }  
        }
}

signIn(
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
    }
);


// #3