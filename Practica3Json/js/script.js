window.onload=main;
 

//Step 1.Create the objetc xhr (XMLHttpRequest)
var xhr=new XMLHttpRequest();

function main()
{
    //Asignación mediante función
    document.getElementById("btnAbrir").onclick=abrirJson;

    //Asignación mediante EventListener
    var btnAbrirEvento=document.getElementById("btnAbrirEvent");
    btnAbrirEvento.addEventListener("click",abrirJsonEvent)
}

function abrirJson()
{
    //alert("Abrir JSon");
    // Exercise of asyncron request
   
    
    //Step 2. Define the MIME type solicited. In this case, the MIME type solicited is an application/json
    xhr.responseType="application/json";
    
    //
    //xhr.responseText="application/xml"

    //Step 3. Open the xhr object webxml file extention is xml for application/xml  
    xhr.open("GET","json/example3.json",true);

    //Step 4. Verify that the solicitude has been attended by the server
    xhr.onload=funcionCallBack;
    xhr.send();


}
function funcionCallBack()
{
        document.getElementById("jsonResult").innerHTML=xhr.responseText;

        //Parsing between JS object and JSON object

        var data=JSON.parse(xhr.responseText);
        console.log(data.menu["items"][0]["id"]);
   
}
function abrirJsonEvent()
{
    //alert("Abrir JSon Event");

}