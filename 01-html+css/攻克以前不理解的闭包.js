/**
 * Created by admin on 2020/11/17.
 */
function init1() {
    var name = "Mozilla"; // name ��һ���� init �����ľֲ�����
    function displayName() { // displayName() ���ڲ�������һ���հ�
        alert(name); // ʹ���˸������������ı���
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