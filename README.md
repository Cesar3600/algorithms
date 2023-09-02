### ALGORITHMS


### RECURSION
Es una tecnica de resolucion de provlbmeas donde la solucion depende de solucionar pequenas instancias del mismo problema.

recursion es cuando una funcion se llama  asi mismo


por que?

es una gran tecnica para simplificar tu solucion

si tu encuentras dividiendo el proble4ma en versiones mas pequenas del mismo problema, la recursividad es muy util


### ALGUNOS PUNTOS SOBRE RECURSION

cada solucion recursiva necesita tener un caso base, una condicion para terminar la recursividad.


Recursion puede simplificar la solucion de un problema pero esto no siempre se traduce en na solucion rapida, uns solucion recursiva podria ser peor compardada con una solucion iterativa


recursion no es sencillo de entender. no te rindas si luchas por entender el concepto.
dont give up!! 


### LA SECUENCIA FIBONACCI RECURSIVA

1. descubre como romper el problema en pequenas versiones del mismo problema.

2. identifica el caso base para recusividad



para la resolucion de un numero finonacci utilizando recursividad esta no es apropiada para poder resolverla.

```
function recursiveFibonacci(num:number):number{
  if(num < 2 && num >= 0){
    return num
  }
  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2)  
}
```

1. la funcion recibe un parametro(num).
2. si num es menor a 2, o sea si es 0 o 1 entonces devuelve sus valores.
3. vuelve  a llamar a la funcion con el valor n reducido en 1 y luego en 2 par asumarlos
 4. Esto funciona pero para valores pequenos, es ineficiente para numeros grandes
 
