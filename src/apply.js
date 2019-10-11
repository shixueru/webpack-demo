"use strict";
function Person(name, age) {
    this.name = name;
    this.age = age;
}
function Student(name, age, grade) {
    Person.apply(this, arguments);
    this.grade = grade;
}
function Teacher( age, name, grade) {
    Person.call(this, age, name, grade);
    this.grade = grade;
}
var student = new Student("zhangsan", 18, "大学");
console.log(student);



















