`use strict`
let tableEl = document.getElementById("tab");


Employee.prototype.renderTable = function () {
    let tr = document.createElement("tr");
    tableEl.appendChild(tr);

    let depTd = document.createElement("td");
    depTd.textContent = this.department;
    tr.appendChild(depTd);

}
console.log(tableEl)
    for (let i = 0; i < allEmp.length; i++) {
          allEmp[i].renderTable();}