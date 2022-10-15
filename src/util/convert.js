const str = 'add $a0, $s0, $zero';
let ret = str.replaceAll(",", "");

const strCopy = ret.split(" ");


let op = 0;
let rs = strCopy[2];
let rt = strCopy[3];
let rd = strCopy[1];
let shamt = 0;
let fn = "add";


let strAfter = "{6'd"+op+", 5'd"+rs+", 5'd"+rt+", 5'd"+rd+", 5'd"+shamt+", 6'd"+fn+"}";

console.log(strAfter);