// import "babel-pollyfill";
import "./apply";
import { deepClone, throttle} from "./utils";

setTimeout(() => {
    console.log(1);
}, 100);
setTimeout(() => {
    console.log(2);   
});
console.log(3);


// 构造函数
// function MathHandle(x, y) {
//     this.x = x;
//     this.y = y;
// }
// MathHandle.prototype.add = function () {
//     return this.x + this.y;
// }
// var m = new MathHandle(1, 2);
// console.log('构造函数', m.add());


// class
// 语法上更加贴合面向对象的写法
// 实现继承更加易读、易理解
// 本质是语法糖，使用prototype
class MathHandle{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add() {
        return this.x + this.y;
    }
}
var m = new MathHandle(1, 2);
console.log(m.add());
console.log(typeof MathHandle); // function
console.log(MathHandle.prototype.constructor === MathHandle); // true
console.log(m.__proto__ === MathHandle.prototype); // true


// 继承
// es6语法
// function Animal(){
//     this.eat = function(){
//         alert('animal eat');
//     }
// }
// function Dog() {
//     this.bark = function () {
//         alert('dog bark');
//     }
// }
// Dog.prototype = new Animal();
// var hashiqi = new Dog();
// hashiqi.bark();
// hashiqi.eat();
// class语法
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eat`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    say() {
        console.log(`${this.name} say`);
    }
}
const dog = new Dog('哈士奇');
dog.say();
dog.eat();




// 深拷贝
let a = [1, 2, 3, 4],
    b = deepClone(a);
a[0] = 2;
console.log(a, b);

// 防抖节流
window.onscroll = throttle(function() {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('滚动条位置： ' + scrollTop);
}, 800);







