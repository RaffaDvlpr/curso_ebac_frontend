document.getElementById('form-do-pequeno-botao').addEventListener('submit', function (event){
    event.preventDefault();

    const ponto1 = "."
    const ponto2 = ".."
    const ponto3 = "..."

    setTimeout(function(){
        document.getElementById('disse').innerText = "";
    }, 100)

    setTimeout(function(){
        document.getElementById('estou-funcionando').innerText = ponto1;
    }, 100)
    setTimeout(function(){
        document.getElementById('estou-funcionando').innerText = ponto2;
    }, 600)
    setTimeout(function(){
        document.getElementById('estou-funcionando').innerText = ponto3;
    }, 1100)

    setTimeout(function(){
        document.getElementById('estou-funcionando').innerText = ponto1;
    }, 1600)
    setTimeout(function(){
        document.getElementById('estou-funcionando').innerText = ponto2;
    }, 2100)
    setTimeout(function(){
        document.getElementById('estou-funcionando').innerText = ponto3;
    }, 2600)

    setTimeout(function(){
        document.getElementById('estou-funcionando').innerText = "'Obaa, estou funcionando!'";
    }, 3600)

    setTimeout(function(){
        document.getElementById('disse').innerText = " - disse o pequeno botão.";
    }, 3600)
})