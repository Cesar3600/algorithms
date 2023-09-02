# **ALGORITHMS**


## RECURSION
Es una tecnica de resolucion de provlbmeas donde la solucion depende de solucionar pequenas instancias del mismo problema.

recursion es cuando una funcion se llama  asi mismo


por que?

1. es una gran tecnica para simplificar tu solucion

2. si tu encuentras dividiendo el proble4ma en versiones mas pequenas del mismo problema, la recursividad es muy util


***


## ALGUNOS PUNTOS SOBRE RECURSION

1. cada solucion recursiva necesita tener un caso base, una condicion para terminar la recursividad.


2. Recursion puede simplificar la solucion de un problema pero esto no siempre se traduce en na solucion rapida, uns solucion recursiva podria ser peor compardada con una solucion iterativa


3. recursion no es sencillo de entender. no te rindas si luchas por entender el concepto.
dont give up!! 




## LA SECUENCIA FIBONACCI RECURSIVA

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




## LA RECURSIVIDAD APLICADA AL FACTORIAL DE UN NUMERO

1. podemos pensar en que:
5! = 5 x !(5 - 1)  |  5 x !4
4! = 4 x !(4 - 1)  |  4 x !3
3! = 3 x !(3 - 1)  |  3 x !2
2! = 2 x !(2 - 1)  |  2 x !1
1! = 1 x !(1 - 1)  |  1 x !0
0! = 1

por lo tanto: 

>[!NOTE]
>
>!n = n * !(n-1)


El codigo para la factorial recursivo seria:

```
const recursiveFactorial = (num:number):number => {
  if(num === 0){
    return 1;
  }
  return num * recursiveFactorial2(num - 1);
}
```


>[!IMPORTANT]
>
>es complejidad de tiempo lineal: 
>
>Big-O = O(n)
>



## BUSQUEDA LINEAL


```
const linearSearch = (arr:number[],el:number):number => {
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === el){
      return i
    }
  }

  return -1
}
```

>[!INFO]
>## BIG-O GUIDE
>Calculando la no dependencia en el tam,ano del input -O(1)
> 1. loop -O(n)
> 2. nested loops -(n^2)
>
>El tamano del input reducido por la mitad -O(logn) 


En este caso seria:

Big-O = O(n)


