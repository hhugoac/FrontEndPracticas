//Continue & break

var contador=0;
var respuesta="s";

while(true)
{
    console.log("El contador es "+ contador);
    respuesta=prompt("Otro ciclo?(s/n)");
    if (respuesta=="n" || respuesta=="N" )
    {
        break;
    }
    else
    {
        contador+=1;
    }
}

contador=1;
var numero=parseInt(prompt("Da un número: "));
for(contador=1;contador<numero;contador++)
{
    if(contador%2==0)
    {
        continue;
    }
    else
    {
        console.log("Número impar: "+contador)
    }
}

contador=1;
while(contador<numero)
{
    if(contador%2==0)
    {
        contador++;
        continue;
    }
    else
    {
        console.log("Número impar: "+contador);
    }
    contador++;

}

//Algoritmo de vectores
var nombre=prompt("Dame tu nombre");
var nombresVector=[];

for(contador=0; contador<1000;contador++)
{
    nombresVector[contador]=nombre+" "+contador;
}
for(contador=0; contador<1000;contador++)
{
    console.log("Nombre: "+contador+":"+nombresVector[contador]);
}