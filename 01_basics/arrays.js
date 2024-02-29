//const arr= [0,1,2,3,4,5]
//.log(arr)
/*const arr1= new Array(0,1,2,3,4,5)
console.log(arr1)

//array methods 
arr.unshift(9)
console.log(arr)
arr.shift()
console.log(arr)
arr.push(3)
console.log(arr)*/
//console.log(arr.includes(9))

/*const arr=[5,9,8]
const newarr= arr.join() // here with the help of join function we converted the array into string
console.log(newarr)
console.log('the sliced part is ' + `${arr.slice(0,1)}` + ' and good to go' )*/


//in slice the origianl array will not change but in spliced the original array gets changed and give out the require array check the chai aur code ka github ..

const arr1= ["kolli","gobaran"]
const arr2 = ["durga","reddy"]
/*arr1.push(arr2)
console.log(arr1)*/
//now we use the funtion called concat it is used to combine two 0r more arrays into a single new array
arr3= arr1.concat(arr2)
console.log(arr3)
 // there is another we can use which is ised by many people thag is spread method
 const allhereos= [...arr1,...arr2]
 console.log(allhereos)

 console.log(Array.isArray("hitesh"))
 console.log(Array.from("gobardan"))
 let score_1 = "100"
 let score_2 = "200"
 let score_3 = "300"
 console.log(Array.of(score_1,score_2,score_3))//this combined a new array 