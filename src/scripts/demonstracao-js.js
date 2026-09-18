/* Demonstração da seção "SVG + JavaScript": altera cor, tamanho e posição do círculo */
const circuloDemo = document.getElementById('circulo-demo');

function mudarCor() {
  const cores = ['#4f7fff', '#9d6bff', '#2fd9d9', '#ff9d7a'];
  const cor = cores[Math.floor(Math.random() * cores.length)];
  circuloDemo.setAttribute('fill', cor);
}

function mudarTamanho() {
  const raioAtual = parseInt(circuloDemo.getAttribute('r'));
  circuloDemo.setAttribute('r', raioAtual >= 45 ? 22 : raioAtual + 8);
}

function mudarPosicao() {
  circuloDemo.setAttribute('cx', 25 + Math.random() * 50);
}

document.getElementById('botao-mudar-cor').addEventListener('click', mudarCor);
document.getElementById('botao-mudar-tamanho').addEventListener('click', mudarTamanho);
document.getElementById('botao-mudar-posicao').addEventListener('click', mudarPosicao);
