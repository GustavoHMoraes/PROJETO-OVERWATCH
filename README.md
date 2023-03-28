# PROJETO-OVERWATCH

Gustavo Henrique Moraes Rocillo

#HTML
Este código HTML cria uma página da web para o jogo Overwatch.
No <head>, eu adicionei um link para o arquivo CSS e uma imagem para o ícone. Depois disso, escrevi o título usando H1 e defini a ID="titulo" para que pudesse ser editado no CSS. Em seguida, adicionei uma imagem do jogo como imagem inicial usando a ID="imagem" e adicionei o "onclick='imagemAleatoria()'" para ativar a função que criei no JavaScript.
Depois disso, adicionei uma pequena descrição sobre o jogo "Overwatch" usando a tag <p> para criar um parágrafo com a ID="descricao".
Em seguida, adicionei uma imagem da arma do personagem brasileiro "Lúcio", um DJ das favelas do Rio de Janeiro, e configurei a função "onclick='lucioAleatorio()'" para mostrar a sua versão dourada.
Por fim, adicionei uma pequena descrição sobre como conseguir a versão dourada das armas dos personagens em Overwatch, usando a tag <h2>

#CSS
Para o <body>, eu adicionei a cor de fundo #405275, que é uma das cores do jogo Overwatch.
Para a #imagem, eu a centralizei e defini um tamanho padrão para as imagens, além de adicionar uma borda a elas.
Para o #titulo, eu o centralizei e mudei a cor da fonte para laranja, que é uma das principais cores do jogo Overwatch. Também adicionei uma sombra para destacar o título. O mesmo foi feito para as descrições.

#JavaScript
Primeiramente eu criei a função "imagemAleatoria" (já mencionada no #html) e declarei duas variáveis dentro dela. A variável "numeroAleatorio" gera um número aleatório de 0 a 9, enquanto a variável "novaImagem" concatena a string "img/imgoverwatch-" com o número gerado anteriormente, seguido de ".jpg" para selecionar o tipo da imagem.
Na quarta linha, a função "document.getElementById("imagem").src" é utilizada para selecionar o elemento HTML que possui o ID "imagem" e alterar o valor do atributo "src", que corresponde à imagem que será exibida.
Para a imagem da arma do "Lúcio", é utilizado o mesmo raciocínio, alterando apenas o nome da função, as variáveis e a ID.