`use strict`
//// VARIABLES 
let allEmp = []
function Employee(Id, Name, Department, Level, image,salr) {
  this.employee_ID = Id;
  this.full_Name = Name;
  this.department = Department;
  this.level = Level;
  this.Image = image;
  this.salary = salr;

  allEmp.push(this)

}
/// CARD SECTION DISPLAY
Employee.prototype.rendar = function () {

    let gridItem = document.createElement("div");
    gridItem.className = "grid-item";
  
    let imagEl = document.createElement("img")
    imagEl.src = this.Image; imagEl.width = 250; imagEl.length = 250; imagEl.className += "ima"
    console.log(gridItem)
    gridItem.appendChild(imagEl)
    let nameEL = document.createElement("p")
    nameEL.textContent = `Name: ${this.full_Name} --  ID-# :  ${this.employee_ID} `
    gridItem.appendChild(nameEL)
    nameEL.style.color = "blue"
    let idEl = document.createElement("p")
    //idEl.textContent=`ID-# : ${this.employee_ID}`
    gridItem.appendChild(idEl)
  
    let departmentEL = document.createElement("p")
    departmentEL.textContent = `Department : ${this.department}  --  Level : ${this.level}`
    gridItem.appendChild(departmentEL)
    let levelEl = document.createElement("p")
    //levelEl.textContent=`Level : ${this.level}`
    gridItem.appendChild(levelEl)
    let salaryEL = document.createElement("p")
    salaryEL.textContent = `Salary : ${this.salary} $`
    gridItem.appendChild(salaryEL)
  
  
    document.getElementById("empList").appendChild(gridItem)
  
  }
  //// SALARY CONDATION THREW THE CONSTRUCTOR
  Employee.prototype.netsalary = function () {
    if (this.level === "Senior") {
  
      this.salary = getRndInteger(1500, 2000);
      // this.salary=this.salary * (0.925);
  
    }
    if (this.level === "Mid-Senior") {
      this.salary = getRndInteger(1000, 1500);
      // this.salary=this.salary* (0.925);
    }
    if (this.level === "Junior") {
      this.salary = getRndInteger(500, 1000);
      //this.salary = this.salary * (0.925);
    }
  }