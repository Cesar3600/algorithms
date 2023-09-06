

const bubbleSort = (arrNumbers:number[]):number[] => {
  let swapped:boolean
  do{
    swapped = false
    for(let i = 0; i < arrNumbers.length - 1; i++ ){
      if(arrNumbers[i] > arrNumbers[i+1]){
        let temp = arrNumbers[i];
        arrNumbers[i]   =  arrNumbers[i+1]
        arrNumbers[i+1] =  temp
        swapped = true
      }
    }
  }while(swapped)

  return arrNumbers
}








const arr = [-6, 20, 8, -2, 4]
//bubbleSort(arr)

//console.log(arr)

console.log(bubbleSort(arr))







