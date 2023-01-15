function toggleMode() {
    const html = document.documentElement;
    // removendo e adcionando a classe
    html.classList.toggle('light');

    // pegar a tag img
    const img = document.querySelector('.profile img');
    
    // substituir a imagem
    if(html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar_dark.png");
    } else {
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png");
    }






}