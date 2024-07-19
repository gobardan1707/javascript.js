// for of loop 
/*const arr = [1,2,3,4,5,6]
for (const num of arr){
    console.log(num)
    
}

const greetings = "hello dosto"
for (const greet  of greetings) 
    {
        console.log(`user is saying ${greet}`)
    
}*/

const value = [1,2,3,45,5]
const total = value.reduce(function(acc,cum){
    console.log(`the value of acc is ${acc} and the value of cum is ${cum}`)
    return acc+cum ;
},0)
console.log(total)

shoppingcart = [
    {
        item : "chart",
        price : 388
    },
    {
        item : "paper",
        price : 388
    },
    {
        item : "pen",
        price : 388
    }
]
const hat = shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(hat)