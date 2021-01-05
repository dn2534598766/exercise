var num1;
num1 = 100;
var str1;
str1 = 'hello';
str1 = "hello";
str1 = num1 + "hello";
console.log(str1);
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
//元组 turple 固定长度类型不同的一组值
var turple1;
turple1 = [1, 'hello'];
//枚举enum
var enumColor;
(function (enumColor) {
    enumColor[enumColor["Red"] = 0] = "Red";
    enumColor[enumColor["Green"] = 1] = "Green";
    enumColor[enumColor["Blue"] = 2] = "Blue";
})(enumColor || (enumColor = {}));
var color1;
color1 = enumColor.Red;
var enumColor2;
(function (enumColor2) {
    enumColor2[enumColor2["Red"] = 0] = "Red";
    enumColor2[enumColor2["Green"] = 2] = "Green";
    enumColor2[enumColor2["Blue"] = 4] = "Blue";
})(enumColor2 || (enumColor2 = {}));
var color2 = enumColor2.Blue;
console.log(color2);
var enumColor3;
(function (enumColor3) {
    enumColor3["Red"] = "red color";
    enumColor3["Green"] = "green";
})(enumColor3 || (enumColor3 = {}));
var color3 = enumColor3.Green;
console.log(color3);
//任意类型any
var any1;
any1 = 1;
any1 = 'hello';
function f1() {
    console.log('hhhhh');
}
//let v1:string=null
//never
function f2() {
    while (true) {
    }
}
var vv = 'hello';
var v2 = vv.length;
v2 = vv.length;
