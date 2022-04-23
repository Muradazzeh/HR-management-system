`use strict`
//// VARIABLES 
let allEmp = []
let submtEL = document.getElementById("data")
function Employee(Id, Name, Department, Level, image) {
  this.employee_ID = Id;
  this.full_Name = Name;
  this.department = Department;
  this.level = Level;
  this.image = image;
  this.salary = 0;

  allEmp.push(this)

}


console.log(allEmp)

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

//// EMPLOYEE INSTANCE
let employee1 = new Employee(1000, 'Ghazi Samer', 'Administration', "Senior", "./image/Ghazi.jpg");
let employee2 = new Employee(1001, 'Lana Ali', 'Finance', "Senior", "./image/Lana.jpg");
let employee3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', "Senior", "./image/Tamara.jpg");
let employee4 = new Employee(1003, 'Safi Walid', 'Administration', "Mid-Senior", "./image/Safi.jpg");
let employee5 = new Employee(1004, 'Omar Zaid', 'Development', "Senior", "./image/Omar.jpg");
let employee6 = new Employee(1005, 'Rana Saleh', 'Development', "Junior", "./image/Rana.jpg");
let employee7 = new Employee(1006, 'Hadi Ahmad', 'Finance', "Mid-Senior", "./image/Hadi.jpg");

/// CARD SECTION DISPLAY
Employee.prototype.rendar = function () {
  
  let gridItem = document.createElement("div");
  gridItem.className="grid-item";
  
  let imagEl = document.createElement("img")
  imagEl.src = this.image; imagEl.width = 250; imagEl.length = 250; imagEl.className += "ima"
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

submtEL.addEventListener("submit", handelsubmit)

function handelsubmit(event) {
  event.preventDefault();

  let selecLev = document.getElementById("lev").value;
  let selecdep = document.getElementById("department").value
  let uniqueID = document.getElementById("uniqueID").innerHTML;
  let sal = document.getElementById(this.salary);
  let empId = uniqueID;
  let empName = event.target.fullName.value;
  let empDep = selecdep;
  let empLev = selecLev;
  let empImg = event.target.imag.value;
  let empSal = sal;
  console.log(empId);




  let newEmployee = new Employee(empId, empName, empDep, empLev, empImg, empSal)
  newEmployee.netsalary()
  newEmployee.rendar()




}

//// CALLING FUNCTION THREW CONSTRUCTOR
for (i = 0; i < allEmp.length; i++) {
  allEmp[i].netsalary();
  allEmp[i].rendar();
}
//// Function AREA
function generate() {
  let id = () => {
    return Math.floor((1 + Math.random()) * 0x1000)
      ;
  }
  let uniqId = document.getElementById("uniqueID");
  uniqId.textContent = id();


}
function getRndInteger(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}


