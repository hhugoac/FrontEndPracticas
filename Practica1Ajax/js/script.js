//alert('testitu');

//  Create the object to make the asyncronous calls
var xhr= new XMLHttpRequest();

document.getElementById("btnOprimir").onclick=Oprimir;

function Oprimir()
{
    // Send a request from the resource resultado.html, how it is only necesary to ask the method to use is GET 
    xhr.open("GET","resultado.html",true);
    xhr.onreadystatechange=EsteNombreEsElQueMeDaLaGana; //The event is executed everytime when the state of petition changes 
    xhr.send(); //Envia la peticion 
}
function EsteNombreEsElQueMeDaLaGana()
{
    console.log("El estado de la peticion asincrona es: "+xhr.readyState);
    if(xhr.readyState==2)
    {
        alert("La peticion asincrona fue cargada");
    }
    if(xhr.readyState==3)
    {
        alert("La peticion asincrona fue recibida");
    }
    if(xhr.readyState==4)
    {
        alert("La peticion asincrona fue completada");
        document.getElementById("resultado").innerHTML=xhr.responseText;
    }
}