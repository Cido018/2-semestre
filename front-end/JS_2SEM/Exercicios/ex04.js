 var canvas = document.getElementById("meuCanvas");
 var ctx = canvas.getContext("2d");

 var x = 50;
 var y = 50;
 var tamanhoQuadrado = 50;

 function desenhar() {
     
     ctx.clearRect(0, 0, canvas.width, canvas.height);

     
     ctx.fillStyle = "blue"; 
     ctx.fillRect(x, y, tamanhoQuadrado, tamanhoQuadrado);
 }

 document.addEventListener("keydown", function(event) {
     var tecla = event.key;

     if (tecla === "A" || tecla === "a") {
         x -= 10; 
     } else if (tecla === "D" || tecla === "d") {
         x += 10; 
     } else if (tecla === "S" || tecla === "s") {
         y += 10; 
     } else if (tecla === "W" || tecla === "w") {
         y -= 10; 
     }

     desenhar();
 });

 desenhar();