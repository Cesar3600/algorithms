
const search = (arr:number[],target:number,leftIndex:number,rightIndex:number):number => {
  if(leftIndex > rightIndex){
    return -1
  }

  let middleIndex = Math.floor((leftIndex + rightIndex)/2)  

  if(arr[middleIndex] === target){
    return middleIndex
  }

  if(target > arr[middleIndex]){
    return search(arr,target,middleIndex + 1,rightIndex)
  }else{
    return search(arr,target,leftIndex,middleIndex - 1)
  }
}

const recursiveBinarySearch = (arr: number[], target: number): any =>{
  return search(arr,target,0,arr.length - 1)
}

const arrData = [-5, 2, 4, 6, 10]

console.log(recursiveBinarySearch(arrData, 10)) //  4
console.log(recursiveBinarySearch(arrData, 6)) //  3
console.log(recursiveBinarySearch(arrData, 20)) // -1
