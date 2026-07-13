/*
function personMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hii, my name is ${name}`);
    },
  };

  return person;
}

let p1 = personmaker("raja", 25); // makes a copy in memory
let p2 = personmaker("ayan", 25); // makes a copy in memory
*/

// Constructor - doesnt return anything and start with capital
/*
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function () {
  console.log(`Hi, my name is ${this.name}`);
};

let p1 = new Person("raja", 25); // refers to the object and become an instance
let p2 = new Person("ayan", 25); // refers to the object and become an instance (p1.talk === p2.talk ----> True)
*/

// Classes - start with capital (easy way to write a constructor and its prototype)

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

let p1 = new Person("raja", 25); // refers to the object and become an instance
let p2 = new Person("ayan", 25); // refers to the object and become an instance

// Inheritance

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age); // parent class constructor is being called
    this.marks = marks;
  }
}

let stu1 = new Student("ayan", 12, 90);

class Teacher extends Student {
  constructor(name, age, subj) {
    super(name, age);
    this.subj = subj;
  }
}

let teach1 = new Student("sir", 12, "maths");

// here we can call teach1.talk() and it will run since all properties of student class are inherited by teacher class.

// if same prototype is written in child class as of parent class then priority will be given to child class function and run that.
