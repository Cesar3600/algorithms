# **ALGORITHMS**

## PRIME NUMBER
El numero primo es un numero natural mayor a 1 que no es un producto de 2 pequenos numeros naturales.

>[!IMPORTANT]
>### Concepto: ###
>isPrime(5) = true( 1*5 or 5*1 )
>isPrime(4) = true( 1*4 or 2*2 or 4*1 )
>
 

```
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
```



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


***


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


***


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


***


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

>[!NOTE]
>## BIG-O GUIDE
>Calculando la no dependencia en el tamano del input -O(1)
> 1. loop -O(n)
> 2. nested loops -(n^2)
>
>El tamano del input reducido por la mitad -O(logn) 


En este caso seria:

Big-O = O(n)


***


## bynary search

problema: dado un arreglo de n elementos y un objetivo llamado t, encuentra el index de t en el arreglo. regresa -1 si el elemento objetivo no se ha encontrado.

```
arr = [-5,2,4,6,10], t = 10 -> deberia retornar 4
arr = [-5,2,4,6,10], t = 6 -> deberia retornar 3
arr = [-5,2,4,6,10], t = 20 -> deberia retornar -1
```

### ---bynary search pseudocode---
reglas
1. si el array es vacio regresa -1 por que no encontro igun elemento.
2. si el arreglo tene elementos, encuentra el elemento medio en el array. Si el objetivo es  igual al elemento medio regresa el index del elemento medio.
3. si el objetivo es menor que el elemento medio entonces la busqueda binaria la realizara en la mitad izquierda del arreglo.
4. Si el objetivo es mayor que el elemento medio entonces la busqueda binaria la hara en la mitad derecha del arreglo.


***


## bynary search solution
codigo search. La idea de este codigo es que se defina el valor medio de un arreglo ordenado ascendente. y en base a ese valor comparar si el numero buscado es mayor o menor. 

```
const binarySearch = (arr:number[],target:number):number => {

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while(leftIndex <= rightIndex){
    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    
    if(target === arr[middleIndex]){
      return middleIndex
    }

    if(target < arr[middleIndex]){
      rightIndex = middleIndex - 1;
    }else{
      leftIndex = middleIndex + 1;
    }
  }
  return -1

}

```

>[!IMPORTANT]
>## BIG-O GUIDE
>Calculando la no dependencia en el tamano del input -O(1)
> 1. loop -O(n)
> 2. nested loops -(n^2)
>
>El tamano del input reducido por la mitad -O(log n) 


En este caso seria:

Big-O = O(log n)


***


## RECURSIVE BINARY SEARCH

```
function search (arr:number[],target:number,leftIndex:number,rightIndex:number):any {
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

function recursiveBinarySearch (arr: number[], target: number): any {
  return search(arr,target,0,arr.length - 1)
}
```

>[!WARNING]
>1. se verifica que el index inicial sea menor al index final si no es el caso regresar -1
>2. calcular middleIndex
>3. verificar si el valor de middleIndex es igual a target
>4. si target es mayor a valor de middleIndex entonces el valor index inicial es una vez mayor al middleIndex y el index final se mantiene.
>5. En caso contrario, si el target es menor al valor del middleIndex entonces el valor inicial del index se mantiene y el valor del index final es igual a middleIndex - 1


***


## SORTING ALGORITHMS

Es importante saber ordenar en proyectos de programacion
aqui trataremos de ordenar numeros mediante los siguiente algoritmos:

a. Bubble Sort
b. Insertion Sort
c. Quick Sort
d. Merge Sort


***


## BUBBLE SORT
PROBLEMA: ordenar uyn arreglo de numeros enteros 

> [!IMPORTANT]
> const arr = [ -6, 20, 8, -2, 4 ]
> bubbleSort(arr) => debera retornar [ -6, -2, 4, 8, 20 ]


### BUBBLE SORT IDEA
Comparar elementos adjacentes en el arreglo e intercambiar poisciones si no estan en la posicion deseada.
Repetir las instrucciones mientras se avanza en el array.
Una vez que se  recorre todo el arreglo y no se producen cambios, entonces el arreglo esta ordenado.


### COMO TRABAJA BUBBLE SORT

> [!IMPORTANT]
> ## compara pares de numeros empezando desde la izquierda:
>
> [ -6, 20, 8, -2, 4 ] -> compara -6 y 20
> [ -6, 8, 20, -2, 4 ] -> compara 8 y 20
> [ -6, 8, -2, 20, 4 ] -> 
> [ -6, 8, -2, 4, 20 ] ->
> [ -6, 8, -2, 4, 20 ] ->
> [ -6, -2, 8, 4, 20 ] -> 
> [ -6, -2, 4, 8, 20 ] ->
>


***

## BUBBLE SORT SOLUTION


```
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

```

> [!INFO]
>
> Big-O = O(n^2)
>


***


## INSERTION SORT
problema: toma run arreglo de enteros, ordena el arreglo.

const arr = [ -6, 20, 8, -2, 4 ]
bubbleSort(arr) => debera retornar [ -6, -2, 4, 8, 20 ]
 

### INSERTION SORT IDEA

1. virtualmente dividimos el arreglo en una parte ordenada y una parte sin ordenar.

2. supongamos que el primer elemento ya esta ordenado y los demas elementos no lo estan.

3. Seleccionar un elemento de la parte desordenada y la comparamos con la parte ordenada.

4. Los elementos  de la parte ordenada es menor que el elemento seleccionado se pasara al siguiente elemento de la parte desordenada.

5. En caso contrario, mover los elementos grandes en la parte ordenada hacia la derecha.

6. insertar el elemento seleccionado en el indice derecho.

7. repetir hasta que todos los elementos desordenados esten colocados en el orden correcto.


>[!INFO]
> ejemplo de orden por insercion  


| [ -6 **(20)** 8 -2 4 ] | NTI = 20 | SE = -6 | -6 > 20 ? NO, colocar el 2 a la derecha de -6 |
| :--------------------- | :------- | :------ | :-------------------------------------------- |
| [ -6 20 **(8)** -2 4 ] | NTI = 8  | SE = 20 | 20 > 8  ? SI, desplazar el 20 a la derecha    |   
| [ -6 20 20 **(-2)** 4] | NTI = 8  | SE = -6 | -6 > 8  ? NO, colocar 8 a la derecha de -6    |   
| [ -6 8 20 **(-2)** 4 ] | NTI = -2 | SE = 20 | 20 > -2 ? SI, colocar el 20 a la derecha      |   
| [ -6 8 20 20 **(4)** ] | NTI = -2 | SE = 8  | 8  > -2 ? SI, desplazar 8 a la derecha        |   
| [ -6 8 8 20 **(4)**  ] | NTI = -2 | SE = -6 | -6 > 2  ? NO, colocar -2 a la derecha de -6   |

***


## 



>[!NOTE]
> lorem

>[!TIP]
> lorem

>[!IMPORTANT]
> lorem

>[!CAUTION]
> lorem

>[!WARNING]
> lorem

>[!ADMINISTRATION]
> lorem

>[!AVAILABILITY]
> lorem

>[!PREREQUISITES]
> lorem

>[!ERROR]
> lorem

>[!ADMINISTRATION]
> lorem

>[!INFO]
> lorem

>[!SUCCESS]
> lorem



