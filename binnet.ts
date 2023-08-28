
interface binnetFunc{
  (n:number):number
}

const binnet:binnetFunc = n => {
  const phi = (1 + Math.sqrt(5))/2
  const psi = (1 - Math.sqrt(5))/2

  return Math.floor((Math.pow(phi,n) - Math.pow(psi,n))/Math.sqrt(5))
}


console.log(binnet(5))
console.log(binnet(7))
console.log(binnet(9))
console.log(binnet(12))