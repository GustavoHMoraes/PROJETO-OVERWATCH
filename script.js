function mudar(){
    let img = document.getElementById("imagem");
    let trocar = Math.trunc(Math.random()*10)
    img.src = "img/imgoverwatch-" + trocar + ".jpg";
}