`use strict`
let allEmp =[]
let empsal=[]
function Employee(Id,Name,Department,Level,image){
    this.employee_ID =Id;
    this.full_Name = Name;
    this.department = Department;
    this.level = Level;
    this.image = image;
    this.salary = 5;
    empsal.push(this.salary)
   allEmp.push(this)
    
}


console.log(allEmp)

function getRndInteger(min, max) {
  return Math.round(Math.random() *  (max - min) ) + min ;
} 
      
      Employee.prototype.netsalary = function(){
        if( this.level === "Senior"){
          
          this.salary=getRndInteger(1500,2000);
          this.salary=this.salary * (0.925);
         
        }
        if( this.level === "Mid-Senior"){
          this.salary=getRndInteger(1000,1500);
          this.salary=this.salary* (0.925);
        }
        if( this.level === "Junior"){
          this.salary=getRndInteger(500,1000);
         this.salary = this.salary * (0.925);
          } 
      }
     
    
      console.log(empsal)
 
      

     
    

let employee1=new Employee(1000,'Ghazi Samer','Administration',"Senior");
let employee2=new Employee(1001,'Lana Ali','Finance',"Senior");
let employee3=new Employee(1002,'Tamara Ayoub','Marketing',"Senior");
let employee4=new Employee(1003,'Safi Walid','Administration',"Mid-Senior");
let employee5=new Employee(1004,'Omar Zaid','Development',"Senior");
let employee6=new Employee(1005,'Rana Saleh','Development',"Junior");
let employee7=new Employee(1006,'Hadi Ahmad','Finance',"Mid-Senior");

Employee.prototype.rendar=function(){
  document.write (`<h1>This is employee ${this.employee_ID} ${this.full_Name} and it is salary  : ${this.salary} </h1> `)}
for(i=0;i<allEmp.length;i++){
  allEmp[i].netsalary();
  allEmp[i].rendar();
  
  
}

// employee1.rendar();
// employee2.rendar();
// employee3.rendar();
// employee4.rendar();
// employee5.rendar();
// employee6.rendar();
// employee7.rendar();
// employee1.netsalary() ;
// employee2.netsalary();
// employee3.netsalary();
// employee4.netsalary();
// employee5.netsalary();
// employee6.netsalary();
// employee7.netsalary();

