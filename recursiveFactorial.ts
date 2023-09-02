
const recursiveFactorial = (num:number):number => {
  let result = 1;
  if(num < 1){
    return 1
  }

  while(num > 1){
    result *= num;
    num--;
  };
  return result;
}

const recursiveFactorial2 = (num:number):number => {
  if(num === 0){
    return 1;
  }
  // !n = n * !(n-1)
  return num * recursiveFactorial2(num - 1);
}

console.log(recursiveFactorial(7));


// !5 = 5*4*3*2*1

// n * (n-1)




