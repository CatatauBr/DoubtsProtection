const banner = {
    slides : document.querySelectorAll(".item-banner"),
    listaDeIndices : document.querySelectorAll(".ponto"),
    // slideAtivo : document.querySelector(".banner-ativo"),
    // indiceAtivo : document.querySelector(".ponto-ativo")
};

const controle = {
    btnVoltar : document.querySelector("#btn-voltar"),
    btnAvancar : document.querySelector("#btn-avancar")    
};

let capturaIndiceAtivo = 0;

document.addEventListener("load", carregarNoticia(capturaIndiceAtivo));
controle.btnAvancar.addEventListener("click", proximaNoticia);
controle.btnVoltar.addEventListener("click", noticiaAnterior);

function carregarNoticia(indice) {
    banner.slides[indice].classList.toggle("banner-ativo");
    banner.listaDeIndices[indice].classList.toggle("ponto-ativo");
}

function proximaNoticia() {
    document.querySelector(".banner-ativo").classList.remove("banner-ativo");
    document.querySelector(".ponto-ativo").classList.remove("ponto-ativo");

    capturaIndiceAtivo++;

    if (capturaIndiceAtivo >= banner.listaDeIndices.length) {
        capturaIndiceAtivo = 0;
        banner.slides[capturaIndiceAtivo].classList.toggle("banner-ativo");
        banner.listaDeIndices[capturaIndiceAtivo].classList.toggle("ponto-ativo");
    } else {
        banner.slides[capturaIndiceAtivo].classList.toggle("banner-ativo");
        banner.listaDeIndices[capturaIndiceAtivo].classList.toggle("ponto-ativo");
    }
}

function noticiaAnterior() {
    document.querySelector(".banner-ativo").classList.remove("banner-ativo");
    document.querySelector(".ponto-ativo").classList.remove("ponto-ativo");

    capturaIndiceAtivo--;

    if (capturaIndiceAtivo < 0) {
        capturaIndiceAtivo = banner.listaDeIndices.length - 1;
        banner.slides[capturaIndiceAtivo].classList.toggle("banner-ativo");
        banner.listaDeIndices[capturaIndiceAtivo].classList.toggle("ponto-ativo");
    } else {
        banner.slides[capturaIndiceAtivo].classList.toggle("banner-ativo");
        banner.listaDeIndices[capturaIndiceAtivo].classList.toggle("ponto-ativo");
    }
}

banner.listaDeIndices.forEach((pontoNavegacao, indice) => {
    pontoNavegacao.addEventListener("click", () => {
        document.querySelector(".banner-ativo").classList.remove("banner-ativo");
        document.querySelector(".ponto-ativo").classList.remove("ponto-ativo");

        banner.slides[indice].classList.toggle("banner-ativo");
        pontoNavegacao.classList.toggle("ponto-ativo");
    })
})