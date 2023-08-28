
interface primeNumberFunc{
  (num:number):boolean
}

const primeNumber:primeNumberFunc = num => {
  if(num < 2){
    return false
  }
  for(let i = 2; i < num; i++){
    if(num%i==0){
      return false
    }
  }
  return true
}



console.log(primeNumber(1)) //false
console.log(primeNumber(2)) //true
console.log(primeNumber(3))
console.log(primeNumber(4))
console.log(primeNumber(5))
console.log(primeNumber(6))
console.log(primeNumber(7))
console.log(primeNumber(8))