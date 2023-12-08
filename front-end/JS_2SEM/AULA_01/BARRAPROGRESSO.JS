function animarBarraProgresso()
{
    var progresso = 0;
    var barra = $(".progress-bar");
    var BarraProgresso = $(".progress")

    var intervalo = setInterval(function(){
    if (progresso > 100)
    {
        clearInterval(intervalo);
        BarraProgresso.hide();
        document.body.style.backgroundImage = `url("https://img.ifunny.co/images/a225e653c518eb3514266a003d06eb1a8e8f203febc39bae9698a1aa8d8b02ed_1.jpg")`
    }
    else {
        progresso++;
        barra.css ("width", progresso + "%");
    }
    },50)
}