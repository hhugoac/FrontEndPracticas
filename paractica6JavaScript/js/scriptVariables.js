alert("Bienvenid@");

var numero=1;
var numeroReal=2.3;
var isFake=true;
var cadenita="Carmen, se me rompió ola cadenita";
var variable;

console.log("Hola Mundo");
console.log("Valor de numero:"+numero);
console.log("Valor de numeroReal:"+numeroReal);
console.log("Valor de isFake:"+isFake);
console.log("Valor de cadenita:"+cadenita);
console.log("Valor de variable"+variable);

document.write("Escribir la línea");
cadenita=prompt("Introduce cadena");
console.log("Cadenita introcucida es "+cadenita);

var arrayRapido=[12, 45, "array inicializado en su declaración"];
console.log(arrayRapido);

var miArray=[];
miArray[0]="Hola";
miArray[1]="a";
miArray[2]="todos";
console.log(miArray);

var otroArray=[];
otroArray[0]="un texto";
otroArray[1]=1275;
otroArray[1]=0.78;
otroArray[2]=true;
console.log(miArray);

//operador ternario
var num1=2;
var num2;
var num3=num1+num2;
console.log("Valor de num3:" +num3);
num3+=num2;

var valor=(num1==num2)?true:false;
console.log("El valor de la variable es: "+valor);

//Cambios de tipo entre variables
var num4=prompt("Dar un numero: ");
num5=parseInt(prompt("Dar otro numero"));
var num6=(num4==num5)?"Los numero son iguales":"Los numeros son diferentes";
console.log(num6);