

function recursiveFibonacci(num:number):number{
  let n1 = 0;
  let n2 = 0;
  let sumtot = 0;

  if(num < 2 && num >= 0){
    return num
  }
  console.log('----->'+ num)
  n1 = recursiveFibonacci(num - 1); 
  n2 = recursiveFibonacci(num - 2);
  
  sumtot = n1 + n2;
  
  console.log(`#1::> ${n1}`)
  console.log(`#2::> ${n2}`)
  console.log(`sum total: ${sumtot}`)
  return sumtot
}


//console.log(recursiveFibonacci(0))
//console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(3))
//console.log(recursiveFibonacci(6))
//console.log(recursiveFibonacci(33))
//
// recursive - time complexity

// O(n)


/* 
2   1
1   1 = 2


1 + 1
*/
