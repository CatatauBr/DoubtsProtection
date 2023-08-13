const cabecalho = {
    container : document.querySelector(".cabecalho"),
    menu : document.querySelector(".cabecalho > nav"),
    iconeAbrirMenu : document.querySelector("#icone-menu-principal"),
    iconeFecharMenu : document.querySelector("#icone-fechar-menu-principal")
};

cabecalho.iconeAbrirMenu.addEventListener("click", botaoClicado);
cabecalho.iconeFecharMenu.addEventListener("click", botaoClicado);

function botaoClicado () {
    cabecalho.container.classList.toggle("menu-aberto");
    cabecalho.iconeAbrirMenu.classList.toggle("icone-ativo");
    cabecalho.iconeFecharMenu.classList.toggle("icone-ativo");
}