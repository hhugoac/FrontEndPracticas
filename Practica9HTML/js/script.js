window.onload=function()
{
    document.getElementById("btnHM").onclick=HolaMundo;
    document.getElementById("btnSumar").onclick=Sumar;
    document.getElementById("btnInter").onclick=Intercambiar;
    var etiquetasInput = document.getElementsByTagName("input");

    for(var i=0;i<etiquetasInput.length;i++)
    {
        if(etiquetasInput[i].type=="text")
        {
          etiquetasInput[i].onclick=Resalta;
        }
    }

    document.getElementById("txtLabel1").onblur=revisarTexto;
    document.getElementById("txtLabel4").onfocus=relleno;
    var etiquetasLabel=document.getElementsByTagName("label");
    for(var i=0;i<etiquetasLabel.length;i++)
    {
        etiquetasLabel[i].onmouseover=mensajeTomala;
    }
}

function mensajeTomala()
{
    alert("Tomala");
}

function relleno()
{
    var etiquetasTejuino=document.getElementsByClassName("Tejuino");
    for(var i=0;i<etiquetasTejuino.length;i++)
    {
        etiquetasTejuino[i].value="Tomate mi tejuino!!";
    }
}

function revisarTexto()
{
    if (document.getElementById("txtLabel1").value=="El Macho")
    {
        alert("Tú muy bien");
    }
    else
    {
        alert("Tu muy mal");
    }

}

function Resalta()
{
    document.getElementById("txtLabel5").value=15;
}

function Intercambiar()
{
    var auxiliar=document.getElementById("txtLabel1").value;
    document.getElementById("txtLabel1").value=document.getElementById("txtLabel2").value;
    document.getElementById("txtLabel2").value=auxiliar;
}
function Sumar()
{
    document.getElementById("txtLabel1").value=parseInt(document.getElementById("txtLabel1").value)+parseInt(document.getElementById("txtLabel2").value)
}
function HolaMundo()
{
    document.getElementById("txtLabel1").value="Hola mundo";
}