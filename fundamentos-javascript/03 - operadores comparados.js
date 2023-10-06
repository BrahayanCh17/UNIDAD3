/*
                |Nombre                 |   Sintaxis|
                |-----------------------|-----------|
                |igual                  | ==        |
                |no es igual            | !=        |
                |comparacion estricta   | ===       |
                |desigualdad estricta   | !==       |
                |mayor que              | >         |
                |menor que              | <         |
                |mayor igual que        | >=        |
                |menor igual que        | <=        | 
*/

console.info(Igual)
console.log (1 == 0) //false
console.log(true == 1) //true
console.log(0 == 0) //true
console.log('1' == 1)// true 
console.log(false==0)//true 


console.info()
console.log (1 != 0) //true
console.log(true != 1) //false
console.log(0 != 0) //false
console.log('1' != 1)// false 
console.log(false!=0)//false

console.info("Mayor que")
console.log(5>5) //false
console.log(5>0)//true
console.log(4>3)//true

console.info("Menoor que")
console.log(5<5) //false
console.log(5<0)//false
console.log(4<3)//false
console.log(1<3)//true

console.inf("mayor igual que")
console.log(5>=5)//true

console.inf("Menor igual que")
console.log(4<=6)//true
console.log(4<=4)//true

console.log(3 > 2 > 1) //false 
