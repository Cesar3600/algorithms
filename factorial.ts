
interface factorialFunc{
  (n:number):number
}

const factorial:factorialFunc = n =>{
  let factNum = 1
  for(let i = 1; i <= n ;i++){
    factNum *= i
  }

  return factNum
}


console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(9))
