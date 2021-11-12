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
const users = {
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
  
  console.log(`Object entries: ${Object.entries(users)}`);
  let highNoOfSkills = 0;
  for (let key in users) {
    if (users[key].skills.length > highNoOfSkills) {
        highNoOfSkills = users[key].skills.length;
        console.log(`Highest skillset is currently: ${key} with ${highNoOfSkills} skills`);
    }
  }

  // #2
  let count = 0;
let gte50Pts = 0;
  for (let key in users) {
      if(users[key].isLoggedIn) {
        count++;
      }
      if(users[key].points >= 50) {
        gte50Pts++;
      }
  }

  console.log(`There are ${count} logged in users`);
  console.log(`There are ${gte50Pts} users with greater than or equal to 50 points`);

  // #3
  const mernStackers = [];
  for(let key in users) {
      let skillsArray = users[key].skills;
      if(skillsArray.includes('MongoDB') && skillsArray.includes('Express') && skillsArray.includes('Node') && skillsArray.includes("React")) {
          mernStackers.push(key);
      }
  }

  console.log(`Mern stackers: ${mernStackers}`);

   // #4
   let updatedUsers = Object.assign({"Ramandeep": {
       "email": "ramansb100@gmail.com",
       "skills": ["Java", "Javascript", "React", "HTML", "CSS", "MongoDB", "Node", "Python", "SQL"]
   }}, users);

   console.log(JSON.stringify(updatedUsers));
// #5 & 6
   console.log(Object.keys(updatedUsers));
   console.log(Object.values(updatedUsers));