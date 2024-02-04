// 1) 4 reqemli eded verilib. Bu ededin eveline 7 reqemini , axirinada 8 reqemini artir. Example1: 3333= 733338

let num = 33;
let number = num;
let vuruq = 1;

while (number > 0) {
    number = (number - (number % 10)) / 10;
    vuruq *= 10;
}

number = num;
let process = 7 * vuruq * 10 + number * 10;
let result = process + 8;

console.log(result);


// 2) 1-1000 qeder ederlerin icerisinden ele ededleri cap et ki, reqemleri cemi 3-e bolunsun


for (let i = 1; i <= 1000; i++) {
    let sum = 0;
    let number = i;

    while (number > 0) {
        sum += number % 10;
        number = (number - (number % 10)) / 10;
    }

    if (sum % 3 === 0) {
        console.log(i);
    }
}




// 3) 2 dene eded verilib. I eded 4 reqemli II eded 7 reqemlidir.
//    I ededin 4%-ni tap. 
//    Sonra II ededin 9% ni tap. 
//    Sonra Cavalari toplayib 10 %ni tap.

let firstNum = 100;
let secondNum = 200;

let fourPercent = firstNum * 0.04;

let ninePercent = secondNum * 0.09;

let sum = fourPercent + ninePercent;

let result = sum * 0.10;

console.log(result);


// 5)SWITCH operatoru ile yoxla.
// Verilmish ededdin sonuncu reqemi 1 olarsa-"I gun" sozunu 2 olarsa-"II gun" sozunu ..7 olarsa-"VI gun" sozunu yaz

let num = 125;
let sonRaqam = num % 10;
switch (sonRaqam) {
    case 1:
        console.log("I gun");
        break;
    case 2:
        console.log("II gun");
        break;
    case 3:
        console.log("III gun");
        break;
    case 4:
        console.log("IV gun");
        break;
    case 5:
        console.log("V gun");
        break;
    case 6:
        console.log("VI gun");
        break;
    case 7:
        console.log("VII gun");
        break;
    default:
        console.log("Reqeme uygun gun yoxdur.");
        break;
}


// 6)IF operatoru ile yoxla. 6 dene eded verilib. Bu ededlerden hansi en boyukdur.

let num1 = 5;
let num2 = 27;
let num3 = 7;
let num4 = 20;
let num5 = 10;
let num6 = 2;

let largest = num1;

if (num2 > largest) {
    largest = num2;
}
if (num3 > largest) {
    largest = num3;
}
if (num4 > largest) {
    largest = num4;
}
if (num5 > largest) {
    largest = num5;
}
if (num6 > largest) {
    largest = num6;
}

console.log("En boyuk eded:", largest);



