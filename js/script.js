let menu = document.getElementById("box_busca"); // Obtém o elemento do menu pelo ID
let sombra = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID

function mostrarMenu() {
    // console.log("mostrando menu");

    if (window.getComputedStyle(menu).right != "10px") {
        //menu.style.right = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
        sombra.style.top = "-10vw"; // Move a sombra para a esquerda
    
    }else{
        //menu.style.right = "-480px"; // Esconde o menu deslocando-o para esquerda
        sombra.style.left = "110vw"; // Move a sombra para a direita para ocultá-la
    }

    menu.classList.toggle("box_busca_ativo");
}