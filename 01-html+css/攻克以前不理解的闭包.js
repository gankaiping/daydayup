/**
 * Created by admin on 2020/11/17.
 */
function init1() {
    var name = "Mozilla"; // name 是一个被 init 创建的局部变量
    function displayName() { // displayName() 是内部函数，一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    displayName();
}

function add(){
    var a=1;
    function test(){
        a+=1;
        console.log(a)
    }
    return test();
}