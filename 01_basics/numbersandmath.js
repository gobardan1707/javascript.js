const num = 100;
console.log(num);
const num1 = new Number(400.254);
console.log(num1);
console.log(num1.toString());
const num2=num1.toString();
console.log(num2.length)
console.log(num1.toPrecision(3))
console.log(num1.toFixed(2));
const hun= 10000000000;
console.log(hun.toLocaleString());//american number sysytm 
console.log(hun.toLocaleString('en-IN'));// indian number system 

//++++++++++++++++++++++++++++MATH+++++++++++++++++++++++++++++++++++++++++++++++++++++++

//console.log(Math);
//console.log(Math.abs(-5));
//console.log(Math.floor(1.255));
//console.log(Math.round(1.255));
//console.log(Math.ceil(1.255));
//console.log(Math.min(4,8,6,3,5));
//console.log(Math.max(8,65,6,96,5));
 console.log(Math.random());
 console.log(Math.random()*10+1);
 const max=20;
 const min= 10;
 console.log(Math.floor(Math.random()*(max-min+1))+min)




