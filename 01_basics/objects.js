// see objects 
//literlas and constructors 
// their is one more type of objects that are singleton which are createrd through constructors 

// object literals 

const myname =Symbol("hi")
const jsuser = { 
    name :"gobardan",
    [myname] :"hi",
    age : 20,
   email : "gobardan170",        // this is how symbol is converted into a keyvalue pair 

}
/*console.log(jsuser.name)
console.log(jsuser["name"])
console.log(jsuser[myname])
console.log(typeof(myname))*/

// i can override the key value pair in object 
/*jsuser.email="gonaewfwu.com"
//we can also freeze the object so that no one can change the value 
Object.freeze(jsuser)
jsuser.name="djn"
console.log(jsuser.name)*/


jsuser.greeting=function(){
    console.log("hi jsuser")
}
jsuser.greeting2=function(){
    console.log(`hi js user,${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greeting2())