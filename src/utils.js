"use strict";
/**
 * 深拷贝
 * @param obj 数组或对象
 */
function deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for(let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // 判断obj子元素是否为对象，如果是继续递归
                if(obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    // 如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

/**
 * 防抖节流
 * @param method callback
 * @param mustRunDelay 节流间隔时间
 */
function throttle(method, mustRunDelay) {
    let timer,
    args = arguments,
    start;
    return function loop() {
        let self = this;
        let now = Date.now();
        if (!start) {
            start = now;
        }
        if (timer){
            clearTimeout(timer);
        }
        if (now - start >= mustRunDelay) {
            method.apply(self, args);
            start = now;
        } else {
            timer = setTimeout(() => {
                loop.apply(self, args);
            }, 50);
        }
    }
}


module.exports = {
    deepClone,
    throttle
}



























