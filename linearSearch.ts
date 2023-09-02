


const lineaSearch = (el:string):number => {
  const arr = ["a","b","c","d","e","f"]
  return arr.indexOf(el)
}


console.log(lineaSearch('r'))


const linearSearch2 = (arr:number[],el:number):number => {
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === el){
      return i
    }
  }

  return -1
    
}

const arrayNumber = [2,3,-4,5,6,7,8,9]
console.log(linearSearch2(arrayNumber,-4))


// BIG O
// Calculando la no dependencia del tamano del imput





