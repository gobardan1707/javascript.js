/*function addtwonumbers(number1,number2){

//console.log(number1+number2)
return number1+number2;
console.log("gobi") //after return we cannot perform anything 
}

console.log(addtwonumbers(3,5))*/


function hi(username){
    if(!username){
        //console.log("please enter username")
        return 
    }
    return `${username} just loggied in `// here inside flower breckets the username is variable
}
//console.log(hi("gobi"))
//console.log(hi(""))

function getthenumber(...num1 ){
return num1;

}
//console.log(getthenumber(2,5,6,3))
const baby ={
    usernamee :"gobi",
    price :300

}
function handleobject(anyobject){
    console.log(`username is ${anyobject.usernamee} and the price is ${anyobject.price}`
    )

}
handleobject(baby)

const bro=[2,3,4,5,9]
function takingnumber(any){
    return any[3]

}
console.log(takingnumber(bro))