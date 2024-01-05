let value = "33"    
let convertedValue = Number(value)    // convert to a number 
console.log(typeof convertedValue)   //   returns a number
 let value1 = "fds"         
 let convertedValue1 = Number(value1)    // converts type to a number
 console.log(convertedValue1)            //   returns NaN, if string is empty then returns a 0

 let value2 = undefined
 let convertedValue2 = Number(value2)    // converts type to a number
 console.log(typeof convertedValue2)   //   returns a number
 console.log(convertedValue2)            //   returns 0, NaN if undefined is passed, if true =>1  false => 0

