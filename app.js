`use strict`
let newArr=[]
let submtEL = document.getElementById("data")
console.log(allEmp)
//// EMPLOYEE INSTANCE
let employee1 = new Employee(1000, 'Ghazi Samer', 'Administration', "Senior", "./image/Ghazi.jpg");
let employee2 = new Employee(1001, 'Lana Ali', 'Finance', "Senior", "./image/Lana.jpg");
let employee3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', "Senior", "./image/Tamara.jpg");
let employee4 = new Employee(1003, 'Safi Walid', 'Administration', "Mid-Senior", "./image/Safi.jpg");
let employee5 = new Employee(1004, 'Omar Zaid', 'Development', "Senior", "./image/Omar.jpg");
let employee6 = new Employee(1005, 'Rana Saleh', 'Development', "Junior", "./image/Rana.jpg");
let employee7 = new Employee(1006, 'Hadi Ahmad', 'Finance', "Mid-Senior", "./image/Hadi.jpg");





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
submtEL.addEventListener("submit", handelSubmit)
function handelSubmit(event) {
  event.preventDefault();

  let empLev = document.getElementById("lev").value;
  let empDep = document.getElementById("department").value
  let empId = document.getElementById("uniqueID").innerHTML;
  let empSal = document.getElementById(this.salary);
  let empName = event.target.fullName.value;
  let empImg = event.target.imag.value;
  console.log(empId);
  let newEmployee = new Employee(empId, empName, empDep, empLev, empImg, empSal);
  newEmployee.netsalary();
  newEmployee.rendar();
  saveData(allEmp);
  
}

function saveData(data) {

  let stringfiyData = JSON.stringify(data);
  localStorage.setItem("employe", stringfiyData);
}
function getData() {
  let retrievedData = localStorage.getItem("employe");

  let arrayData = JSON.parse(retrievedData);
  // each object doesn't has access to render method
  if (arrayData != null) {
    for (let i = 0; i < arrayData.length; i++) {
    
      new Employee(arrayData[i].Id, arrayData[i].Name, arrayData[i].Department, arrayData[i].Level, arrayData[i].image, arrayData[i].salr);
     
    }  
    
  }
  
 
}


getData();