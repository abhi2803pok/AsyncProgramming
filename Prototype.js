//ProtoType Based Inheritance

function Employee(age){
    this.age = age
}
Employee.prototype.getAge = function(){
    return this.age
}

function PermanentEmployee(annualSalary){
    this.annualSalary = annualSalary;
}

var e1 = new Employee(24);
PermanentEmployee.prototype = e1;
var e2 = new PermanentEmployee(50000);

console.log(e2.getAge())