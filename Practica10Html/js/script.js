alert("NO jalo")
window.onload=function()
{
    document.getElementById("btnPlay").onclick=Reproducir;
    document.getElementById("btnPausar").onclick=Pausar;
    function Reproducir()
    {
        var video1=document.getElementById("miVideo");
        video1.play();
    }
    function Pausar()
    {
        var video1=document.getElementById("miVideo");
        video1.pause();
    }
}