//Algoritmo de numero mayor

var numero1=prompt("Dame un número");
numero1=parseInt(numero1);

var numero2=prompt("Dame un número");
numero2=parseInt(numero2);

var numero3=prompt("Dame un número");
numero3=parseInt(numero3);

if(numero1>numero2 && numero1>numero3)
{
    console.log("El numero mayor es: "+numero1);
}
if(numero2>numero1 && numero2>numero3)
{
    console.log("El numero mayor es: "+numero2);
}
if(numero3>numero2 && numero3>numero1)
{
    console.log("El numero mayor es: "+numero3);
}

//Algoritmo del dia de la semana
var dia=parseInt(prompt("Dar un numero del 1-7"));

switch(dia)
{
    case 1: console.log("Lunes");break;
    case 2: console.log("Martes");break;
    case 3: console.log("Miercoles");break;
    case 4: console.log("Jueves");break;
    case 5: console.log("Viernes");document.write("Vienes");break;
    case 6: console.log("Sabado");break;
    case 7: console.log("Domingo"); break;
    default: console.log("Número no valido");break;
}