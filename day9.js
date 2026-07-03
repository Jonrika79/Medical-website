let fruits=["apple","mango","orange","banana"] //[0,1,2,3 ]
// //includes
// console.log(fruits.includes("basketball")) /// it helps us to check the element exists or not


// //indexof
// console.log(fruits.indexOf("Apple")) // it gives us the position of an elemment in an array

// //short
// fruits.sort()
// console.log(fruits) // it sorts the array in alphabetical order
// //reverse
// fruits.reverse()
// console.log(fruits) // it reverses the array


///splice mehtod
// fruits.splice(1,2) // it removes the element from the array and also we can add new element in the array
// console.log(fruits)

// forEach loop method     its loopps throughan array
// fruits.forEach(function(fruit){
//     console.log("the fruit is "+fruit)  //
// })

// map array method  its helps us to return new array by loop  thorugh  each element
let upper=fruits.map(function(fruit){
    console.log("the fruits are"+fruit)
    return fruit.toUpperCase() // it returns new array with all the elements in uppercase
})
console.log(upper) // it returns new array with all the elements in uppercase



/// filter method  it returns new array containing only the  elements that satisfy the conditions
let number=[1,2,3,4,5,,6,7,8,9,10]
// let evennumber=number.filter(function(num){
//     return num%2!==0;
// })
// console.log(evennumber)


// reduce  helps us to reduce the array to a single value
//   let nummm=number.reduce(function(num){
    
//     return num+num
//   })
// console.log(nummm)


let totalnumber=number.reduce(function(initial,num){ //(6,4)
    return initial+num; //  0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15, 15+6=21, 21+7=28, 28+8=36, 36+9=45, 45+10=55
},6) // initial value of total is 0

console.log(totalnumber)  // it returns the sum of all the elements in the array





   