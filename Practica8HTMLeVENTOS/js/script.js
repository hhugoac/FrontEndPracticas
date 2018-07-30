window.onload=function()
{
    console.log("Prueba")
    document.getElementById("tituEventos").onclick=cambiaTitulo;
    document.getElementById("tituEventos").ondblclick=cambiaTitulo2;
    document.getElementById("segundoParrafo").onclick=cambiaSegundoParrafo;
}
function cambiaSegundoParrafo()
{
    document.getElementById("segundoParrafo").innerHTML="Prueba";
    document.getElementById("segundoParrafo").style.background="navy";
}

function cambiaTitulo2()
{
    document.getElementById("tituEventos").innerHTML="  Sin titulo";
}

function cambiaTitulo()
{
    document.getElementById("tituEventos").innerHTML+="Hugo!!";
}

function cambiaGris()
{
    document.getElementById('contenidos2').style.borderColor='silver';
}

function cambiaNegro()
{
    document.getElementById('contenidos2').style.borderColor='black';
}

