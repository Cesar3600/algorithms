
const insertionSort = (arrNumbers:number[]):number[] => {
  for (let i = 1; i < arrNumbers.length; i++) {
    let numStore = arrNumbers[i];
    let h = i - 1;
    while (h >= 0 && arrNumbers[h] > numStore) {
      arrNumbers[h+1] = arrNumbers[h];
      h = h - 1
    }
    arrNumbers[h + 1] = numStore 
  }
  return arrNumbers
}

const arr = [-6, 20, -8, -2, 4]

console.log(insertionSort(arr))






