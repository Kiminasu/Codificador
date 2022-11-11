var textInput = document.querySelector('#input_texto');
var  outInput = document.querySelector('#output');
var radioCesar = document.getElementById('cifra_Cesar');
var radioBase64 = document.getElementById('base_64');

function criptografar() { 
    var texto = textInput.value;

    var resultCripto = texto.replace(/a/g, "ka").replace(/e/g, "ke").replace(/i/g, "ki").replace(/o/g, "ko").replace(/u/g, "ku");

    document.getElementById('output').innerHTML = '<textarea readonly id="input_texto">' + resultCripto + '</textarea>' + '<button class="btn_copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/ka/g, "a").replace(/ke/g, "e").replace(/ki/g, "i").replace(/ko/g, "o").replace(/ku/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input_texto">' + resultDescripto + '</textarea>' + '<button class="btn_copiar" id="copiar" onclick="copiar()">Copiar</button>';
}




function copiar() {
    var textoCop = document.getElementById('input_texto');

    textoCop.select();
    document.execCommand('copy')
    alert("Texto copiado!");
}

