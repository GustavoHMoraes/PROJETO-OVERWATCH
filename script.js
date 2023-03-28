function imagemAleatoria() {
    var numeroAleatorio = Math.trunc(Math.random() * 10);
    var novaImagem = "img/imgoverwatch-" + numeroAleatorio + ".jpg";
    document.getElementById("imagem").src = novaImagem;
  }
  function lucioAleatorio() {
    var numerolucio = Math.trunc(Math.random() * 2);
    var novolucio = "img/lucio-" + numerolucio + ".png";
    document.getElementById("lucio").src = novolucio;
  }