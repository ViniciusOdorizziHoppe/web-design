function verGitHub() {
    window.location.href = "https://github.com/ViniciusOdorizziHoppe"
}


function Redirecionar() {
    
var segundos = 5
var texto = document.getElementById("texto")

texto.innerText = `Você será direcionado em ${segundos} segundos`

const intervalo = setInterval(() => {
        segundos--;
        texto.innerText = `Você será direcionado em ${segundos} segundos`;

        if (segundos <= 0) {
            clearInterval(intervalo);
            texto.innerText = "Redirecionando...";
            
           
             window.location.href = "index.html";
        }
    }, 1000);
}