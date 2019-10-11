/**
 * promise
 *  */
// new promiss实例要return;
// new promiss时要传入函数，函数有resolve, reject两个参数；

// function loadImg(src, callback, fail) {
//     var img = document.createElement('img');
//     img.onload = function () {
//         callback(img);
//     }
//     img.onerror = function () {
//         fail();
//     }
//     img.src = src;
// }
var src = 'https://www.imooc.com/static/img/course/logo-course.png?111';
// loadImg(src, function (img) {
//     console.log(img.width);
// }, function () {
//     console.log('failed');
// })

function loadImg(src) {
    const promiss = new Promise(function (resolve, reject) {
        var img = document.createElement('img');
        img.onload = function () {
            resolve(img);
        }
        img.onerror = function () {
            reject();
        }
        img.src = src;
    })
    return promiss;
}
var result = loadImg(src);
result.then(function (img) {
    console.log(img.width, img.height);
}, function () {
    console.log('failed');
})

/**
 * async （ES6都玩腻了，ES7还远吗，异步操作终极大法）
 */
function getSomething() {
    var r = 0;
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            r = 2;
            resolve(2);   
        });
    })
}
async function compute() {
    var x = await getSomething();
    console.log(x * 2);
}
compute();

/**
 * includes(str, index) 如果在字符串中检测到指定文本，返回true，否则false
 */
let t ='abcdefg';
if(t.includes('cde')){
    console.log('includes');
}

/**
 * startsWith(str, index)：如果在字符串起始部分检测到指定文本，返回true，否则返回false
 */ 
if(t.startsWith('ab')){
    console.log('startsWith');
}

/**
 * endsWith(str, index)：如果在字符串的结束部分检测到指定文本，返回true，否则返回false
 */
if(t.endsWith('fg')){
    console.log('endsWith')
}

/**
 * 箭头函数（=>）
 * 
 */
const arr =[5,10]
const s = arr.reduce((sum, item)=> sum + item)
console.log(s)

/**
 * 块级作用域的引入 
 * let声明的变量只能在其所在的代码块内才能访问，var声明的变量由于是全局变量，因此可以在代码块外访问
 * let、const声明的变量不能提前
 */









