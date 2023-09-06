
function search (arr:number[],target:number,indexLeft:number,indexRight:number):any {

  if(indexLeft > indexRight){
    return -1
  }
  let pivot = Math.floor((indexLeft + indexRight)/2)
  
  if(arr[pivot] === target){
    return pivot
  }
  
  if(target > arr[pivot]){
    return search(arr,target,pivot + 1,indexRight)
  }else{
    return search(arr,target,indexLeft,pivot - 1)
  }
}

function searchNumberPos (arrNumbers:number[],target:number):any {
  if(arrNumbers.length === 0){
    return -1
  }else{
    return search(arrNumbers,target,0,arrNumbers.length - 1)
  }
}

const arrNumbers = [-3,-1,0,12,33,45,77,100]
const num = 33

console.log(searchNumberPos(arrNumbers,num))


//////////////////////////////////////////////////



const factorial = (n:number):number => {
  if(n===0){
    return 1
  }
  let resultado = n
  resultado *= factorial(n - 1)
  return resultado
}


console.log(factorial(5))

/////////////////////////////////


const fibonacci = (num:number):number[] => {

  let result:number[] = [];

  if(num<=0){
    return result
  }

  switch(num){
    case 1:
      result.push(0);
      break;
    case 2:
      result.push(0,1);
      break;
    default:
      result.push(0,1);
      for(let i = 2;i < num; i++){
        result.push(result[i-1]+ result[i-2])
      }
  }

  return result

}



console.log(fibonacci(6))