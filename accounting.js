`use strict`
let tableEl = document.getElementsByTagName("tbody")[0];

depAllinfo = {
    "Marketing": {
        empCount: 0,
        totSalary: 0,
        avgSalary: 0,
    },
    "Finance": {
        empCount: 0,
        totSalary: 0,
        avgSalary: 0,
    },
    "Development": {
        empCount: 0,
        totSalary: 0,
        avgSalary: 0,
    },
    "Administration": {
        empCount: 0,
        totSalary: 0,
        avgSalary: 0,
    }
}


for (let i = 0; i < allEmp.length; i++) {
    let emp = allEmp[i];
    emp.netsalary()
    depAllinfo[emp.department].empCount += 1
    depAllinfo[emp.department].totSalary += emp.salary
    depAllinfo[emp.department].avgSalary = (depAllinfo[emp.department].totSalary / depAllinfo[emp.department].empCount)
    console.table(emp)
    console.table(depAllinfo[emp.department])
}
let totSum = 0;
let avgSum = 0;
for (key in depAllinfo) {
    dept = depAllinfo[key];

    avgSum += dept.avgSalary;
    totSum += dept.totSalary;

    addRow(key,  dept.empCount, dept.avgSalary, dept.avgSalary);
}

addRow("", "", avgSum, totSum, );



function addRow(p1, p2, p3, p4,){
    let tr = document.createElement("tr");
    // if(cls)
    //     tr.className=cls;

    let depName = document.createElement("td");
    depName.textContent = p1
    tr.appendChild(depName);

    let empCountEl = document.createElement("td");
    empCountEl.textContent = p2;
    tr.appendChild(empCountEl);



    let avgSalaryEl = document.createElement("td");
    avgSalaryEl.textContent = p3;
    tr.appendChild(avgSalaryEl);


    let totSalaryEl = document.createElement("td");
    totSalaryEl.textContent = p4;
    tr.appendChild(totSalaryEl);

    tableEl.appendChild(tr);
}