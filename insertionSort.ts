

const order = (arr:number[]):number[] => {
  let swap:boolean

  do{
    swap = false
    for(let i = 0;i < arr.length - 1;i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swap = true
      }
    }
  }while(swap)
  
  return arr
}



const arr = [-6, 20, 8, -2, 4]

// [-6,8,-2,4,20]
// [-6,-2,4,8,20]
// [-6,-2,4,8,20]

console.log(order(arr))



//fibonacci

const fibonacci = (num:number):number[] => {
  let fibArr:number[] = []
  if(num <=0){
    return []
  }
  if(num == 1){
    return [0]
  } 
  if(num == 2){
    return [0,1]
  }
  if(num >= 3){
    fibArr.push(0,1)
    for(let i = 2; i < num; i++){
      fibArr.push(fibArr[i-1] + fibArr[i-2])
    }
  } 
  return fibArr;
}


console.log(fibonacci(3))
console.log(fibonacci(7))
console.log(fibonacci(12))


//search
const search = (arr:number[],target:number):number => {
  let result:number=-1  
  if(arr.length === 0 ){
    return -1
  }

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      return result = i
    }
  }

  return result
}

console.log(search([3,5,7,12,33],7))


// bubble

const searchbubble = (arr:number[],target:number) => {
  if(arr.length === 0){
    return -1
  }
  
  let leftIndex = 0;
  let rightIndex = arr.length -1;
  
  while(leftIndex <= rightIndex){
    let pivot = Math.floor((leftIndex + rightIndex)/2);
  
    if(target === arr[pivot]){
      return pivot
    }

    if(target < arr[pivot]){
      rightIndex = pivot - 1
    }else{
      leftIndex = pivot + 1
    }
  }
  return -1
}

console.log("aqui: "+ searchbubble([2,45,67,100,345],345))

//factorial


const factorial  = (num:number):number => {
  //!5 = 4x3x2x1 = 24
  let result = 1
  if(num === 0){
    return 0
  }
  let i = 1
  do {
    result *= i;
    i++;
  } while (i <= num)

  return result
}

console.log(factorial(12))

// power of two

const powerOfTwo = (n:number):boolean => {
  return !(n&(n-1))

}

console.log(powerOfTwo(5))


//numero primo
 
const prime  = (num:number):boolean => {

  if(num < 2){
    return false
  }

  for(let i = 2 ; i < num  ; i++){
    if(num%i===0){
      return false
    } 
  }

  return true

}

console.log(prime(30))



