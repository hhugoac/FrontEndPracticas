//funciones en Java_Script

var numero1;
var numero2;

numero1=parseInt(prompt("Dame un número"));
numero2=parseInt(prompt("Dame un número"));

//Llmada a una funcion declarada brevemente
console.log("La suma es:"+suma(numero1,numero2));

//Llamada a una funcion sin parametros
console.log("El mensaje es: "+holaMundo);


//Llamada a una funcion anónima
console.log
("El mensaje es  "+
    (function ()
    {
        return "Hola mundo 2";
    })()

)
console.log
("La suma 2 es: "+
    (function (a,b)
    {
        return a+b;
    })(numero2,numero1)
)

//Llamada a una funcion flecha
console.log
("El mensaje es: "+
    (()=>"Hola munndo con función flecha corta")()
);

console.log
("El mensaje es: "+
    (()=>
    {
        return "Hola munndo con función flecha larga";
    })()
);


//si la funcion con flecha corta perimite omitir las llaves, la palabra function, return y el punto y coma (;).
console.log
("Suma con funcion flecha: "+
    ((a,b)=>a+b)(numero1,numero2)
);


console.log
("Suma con funcion flecha larga: "+
    ((a,b)=>
    {
        return a+b;
    })(numero1,numero2)
)

//funcion hola mundo
function holaMundo()
{
    return "Hola Mundo";
}

// funcion suma de dos numeros
function suma(a,b)
{
     return a+b;
}

//Funcion multiplicacion con el objeto arguments y el atributo length
console.log("Multiplicacion con arguments: "+multiplicacion(2,2));
debugger;
console.log("Multiplicacion con arguments: "+multiplicacion(2,2,2));
console.log("Multiplicacion con arguments: "+multiplicacion(2,2,3,4));

function multiplicacion()
{
    var resMultiplicacion=1;
    for(var i=0;i<arguments.length;i++)
    {
        resMultiplicacion=resMultiplicacion*arguments[i];
    }
    return resMultiplicacion;
}

//Funcion de concatenacion con el objeto arguments y el atributo length
console.log("Concatenacion con argements: "+concatenar("hola"," ","como"," ","estas","?"));
debugger;
console.log("Concatenación con arguments: "+concatenar("Me"," ","llamo"," ","Hugo"));
function concatenar()
{
    var palabra="";
    for(var i=0;i<arguments.length;i++)
    {
        palabra=palabra+arguments[i]
    }
    return palabra;
}