const busca = document.getElementById("box_busca"); // Obtém o elemento do menu pelo ID
const sombra = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID

function mostrarMenu() {
    // console.log("mostrando menu");
    if (window.getComputedStyle(sombra).top != "-210px") {
        sombra.style.top = "-210px";
    
    }else{
        sombra.style.top = "0";
    }

    busca.classList.toggle("box_busca_ativo");
}

// Define uma função nomeada para lidar com o redimensionamento
function ocultaMenuResponsivo() {
    // Se a largura da janela for maior que 768 pixels
    if (window.innerWidth > 768) {
        // Esconde a sombra
        sombra.style.top = "-210px";

        // Fecha a caixa de busca (caso esteja aberta)
        busca.classList.remove("box_busca_ativo");
    }
}

// Adiciona o ouvinte de evento, usando a função nomeada
window.addEventListener("resize", ocultaMenuResponsivo);