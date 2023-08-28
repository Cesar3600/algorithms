
interface fibonacciFunc{
  (num:number):number[]
}


const fibonacci: fibonacciFunc = (num) => {
  let result=[0,1]
  
  for(let i=2; i < num; i++){
    result.push(result[i-2] + result[i-1])
  }

  return result
}
  
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))





