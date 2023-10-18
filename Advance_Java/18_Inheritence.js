
// =========================================
//Sir Code
/*
class CommonClass {
  constructor(obj) {
    console.log("obj--->", obj);                        
    this.salaryAmount = obj?.salary;
    this.feesAmount = obj?.fees;
  }
  login() {
    console.log("----login---->");
  }
}

class Teacher extends CommonClass {
  constructor(obj, per) {
    super(obj);
    this.incrementPercentage = per;
  }
  salary() {
    console.log("----salary---->", this.salaryAmount);
  }
  incrementsalary() {
    const salary = this.salaryAmount * (this.incrementPercentage / 100);
    console.log(`my salary will be ${salary + this.salaryAmount} after 1 year`);
  }
}

class Student extends CommonClass {
  fees() {
    console.log("----fees---->", this.feesAmount);
  }
  login() {
    console.log("---student-login ---->");
  }
  loginWithPerents() {
    super.login();
    console.log("---student-login ---->");
  }
}

let obj = {
  fees: 20000,
  salary: 10000,
};
const STD = new Student(obj);
STD.loginWithPerents();
STD.login();
STD.fees();
const TECH = new Teacher(obj, 10);
TECH.salary();
TECH.incrementsalary();

/*
let str = "test@yahoo.com";
let mm = str.split("@")[1].split(".")[0];
console.log("mm", mm);
*/

// My Code Is Here

class CommonClass {
  constructor(obj) {
    console.log("---->obj<-----", obj);
    this.salaryAmount = obj?.salary;
    this.feesAmount = obj?.fees;
  }
  login() {
    console.log("<-----Login----->");
  }
}

class Teacher extends CommonClass{
  constructor(obj, per) {
    super(obj);
    this.incrementPercentage = per;
  }
  salary() {
    console.log("<-----Salary----->", this.salaryAmount);
  }
  incrementsalary() {
    const salary = this.salaryAmount * (this.incrementPercentage / 100);
    console.log(`my salary will be ${salary + this.salaryAmount} After 1 Year`);
  }
}

class student extends CommonClass{
  fees() {
    console.log("<----Fees---->", this.feesAmount);
  }
  login() {
    console.log("<----Student Login---->");
  }
  loginWithPerents() {
    super.login();
    console.log("<----Student Login---->");
  }
}

let obj = {
  fees: 20000,
  salary: 10000,
};

const Local = new student(obj);
Local.fees();
Local.login()
Local.loginWithPerents();

const Troll = new Teacher(obj, 10);
Troll.salary();
Troll.incrementsalary();