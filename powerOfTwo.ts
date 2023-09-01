
const powerOfTwo = (num:number) => {
  if(num <= 0){
    return false
  }

  while(num%2 === 0){
    num/=2
  }

  if(num !== 1){
    return false
  }
  return true
}

console.log(powerOfTwo(4))

// 2^2 => 4
// 2^3 => 8
// 2^4 => 16
// 2^5 => 32

// another solution:

interface powerOfTwoConf{
  (n:number):boolean
}

const powerOfTwo2:powerOfTwoConf = n => {
   return !(n & (n-1))
}

console.log(powerOfTwo2(4))
