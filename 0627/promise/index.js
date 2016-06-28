/**
 * Created by sks on 2016/6/27.
 */

(function () {

    
    //Promise.all若有一个错误则所有的都不会输出
    Promise.all([
        new Promise(function (resolve,reject) {
            $.get("data1.txt").done(resolve).fail(reject);
        }),
        new Promise(function (resolve,reject) {
            $.get("data2.txt").done(resolve).fail(reject);
        }),
        new Promise(function (resolve,reject) {
            $.get("data3.txt").done(resolve).fail(reject);
        })
    ]).then(function (result) {
        console.log(result);
    }).catch(function (error) {
        console.log(error);
    });
})();