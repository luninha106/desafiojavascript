// estamos guardando na variavel lampada uma tag pelo id
const lampada = document.getElementById('lampada');
const button = document.getElementById('btn');

let lampOn = false;

// addEventListener - espécie de fofoqueiro, vai esperar algo acontecer para funcionar
// () =>{}; arroq function - function simplificada
button.addEventListener('click', () => {
    lampOn = !lampOn;
    lampada.src = lampOn
    ? "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada.png"
    : "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada-com-mago.png"
})

// 