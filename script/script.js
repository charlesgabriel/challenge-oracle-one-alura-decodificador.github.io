function mostrarImagem() {
    $('com-texto').classList.add('esconder-elemento');
    $('com-imagem').classList.remove('esconder-elemento');
}
mostrarImagem();

function esconderImagem() {
    $('com-texto').classList.remove('esconder-elemento');
    $('com-imagem').classList.add('esconder-elemento');
}

function limpar() {
    $('saida-texto').innerHTML = "";
    $('entrada-texto').value = "";
    $('entrada-texto').focus();
    mostrarImagem();
}

$('entrada-texto').addEventListener('input', function() {
    const regex = /[a-zA-Z\s+]/;
    let caracter = this.value.charAt(this.value.length - 1);
    let resultado = regex.exec(caracter);
    if(resultado !== null) {
        this.value = this.value;
    } else {
        this.value = this.value.replace(this.value.charAt(this.value.length - 1), "");
    }
});

$('entrada-texto').addEventListener('keyup', function() {
    this.value = this.value.toLowerCase();
});

function copiarFrase() {
    const frase = $('saida-texto');
    frase.select();
    navigator.clipboard.writeText(frase.value);
    limpar();
}