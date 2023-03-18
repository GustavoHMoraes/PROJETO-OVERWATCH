function imagemAleatoria() {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    var novaImagem = "imgoverwatch-" + numeroAleatorio + ".jpg";
    document.getElementById("imagem").src = novaImagem;
  }
  
  document.getElementById("imagem").addEventListener("click", imagemAleatoria);
  