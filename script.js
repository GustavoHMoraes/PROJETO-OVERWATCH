function imagemAleatoria() {
    var numeroAleatorio = Math.trunc(Math.random() * 10);
    var novaImagem = "img/imgoverwatch-" + numeroAleatorio + ".jpg";
    document.getElementById("imagem").src = novaImagem;
  }