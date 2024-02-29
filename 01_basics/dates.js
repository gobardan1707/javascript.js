/*const mydate= new Date();
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString('en-IN'));
console.log(mydate.toTimeString())

const mydates= new Date(2023,0,3)
console.log(mydates.toISOString())
console.log(mydates.toDateString())*/
const mynewdate=Date.now()
console.log(mynewdate.toLocaleString())//in front of objects we use the cloed brackets to get access to the functions ...
console.log(mynewdate.getMonth)
console.log(mynewdate.toLocaleString('default',{weekday:"long"}))
