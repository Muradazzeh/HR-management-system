`use strict`
let allEmp =[]
function Employee(id,name,department,level,image,salary){
    this.Employee_ID =id;
    this.full_Name = name;
    this.Department = department;
   this.salary=salary
    this.Level = level;
    this.Image = image; 
    allEmp.push(this.Level);
    
}console.log(allEmp)
     Employee.prototype.rendar=function(){
       document.write(`<h1>This is employee ${this.full_Name} and it is salary ${this.salary}: </h1> `);
     }

    
      
      Employee.prototype.salary = function(){
          for(let i=0;i<allEmp.length;i++){
            if(allEmp[i]=="Senior"){
               let  salary= 1500 + Math.random() * (2000 - 1500);
                
                }
                else if( allEmp[i]=="Mid-Senior"){
                   let salary= 1000 + Math.random() * (1500 - 1000);} 
                else if( allEmp[i]=="Junior"){
                   let salary= 500 + Math.random() * (1000 - 500);}
      }console.log(this.salary)
    }  
            
        




let employee1=new Employee('1000','Ghazi Samer','Administration','Senior',"./image",)
let employee2=new Employee('1001','Lana Ali','Finance','Senior',"./image",)
let employee3=new Employee('1002','Tamara Ayoub','Marketing','Senior',"./image",)
let employee4=new Employee('1003','Safi Walid','Administration','Mid-Senior',"./image",)
let employee5=new Employee('1004','Omar Zaid','Development','Senior',"./image",)
let employee6=new Employee('1005','Rana Saleh','Development','Junior',"./image",)
let employee7=new Employee('1006','Hadi Ahmad','Finance','Mid-Senior',"./image",)

employee1.rendar();
employee2.rendar();
employee3.rendar();
employee4.rendar();
employee5.rendar();
employee6.rendar();
employee7.rendar();
employee1.salary();
employee2.salary();
employee3.salary();
employee4.salary();
employee5.salary();
employee6.salary();
employee7.salary();

