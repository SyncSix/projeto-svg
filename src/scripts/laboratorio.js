/* Laboratório SVG interativo: lê os controles e atualiza a forma e o código exibido */
const formaSelect = document.getElementById('lab-forma');
const corInput = document.getElementById('lab-cor');
const tamanhoInput = document.getElementById('lab-tamanho');
const rotacaoInput = document.getElementById('lab-rotacao');
const opacidadeInput = document.getElementById('lab-opacidade');

const grupoLab = document.getElementById('lab-grupo');
const circuloLab = document.getElementById('lab-circulo');
const quadradoLab = document.getElementById('lab-quadrado');
const trianguloLab = document.getElementById('lab-triangulo');
const codigoLab = document.getElementById('lab-codigo');

function atualizarLaboratorio() {
  const forma = formaSelect.value;
  const cor = corInput.value;
  const tamanho = parseInt(tamanhoInput.value);
  const rotacao = rotacaoInput.value;
  const opacidade = (opacidadeInput.value / 100).toFixed(2);

  circuloLab.style.display = forma === 'circulo' ? '' : 'none';
  quadradoLab.style.display = forma === 'quadrado' ? '' : 'none';
  trianguloLab.style.display = forma === 'triangulo' ? '' : 'none';
  grupoLab.setAttribute('transform', `rotate(${rotacao} 150 150)`);

  let codigo = '';

  if (forma === 'circulo') {
    circuloLab.setAttribute('r', tamanho);
    circuloLab.setAttribute('fill', cor);
    circuloLab.setAttribute('opacity', opacidade);
    codigo = `<circle cx="150" cy="150" r="${tamanho}" fill="${cor}" opacity="${opacidade}"\n  transform="rotate(${rotacao} 150 150)"/>`;
  } else if (forma === 'quadrado') {
    // retângulo centralizado: recalcula posição e lado a partir do tamanho
    const inicio = 150 - tamanho;
    const lado = tamanho * 2;
    quadradoLab.setAttribute('x', inicio);
    quadradoLab.setAttribute('y', inicio);
    quadradoLab.setAttribute('width', lado);
    quadradoLab.setAttribute('height', lado);
    quadradoLab.setAttribute('fill', cor);
    quadradoLab.setAttribute('opacity', opacidade);
    codigo = `<rect x="${inicio}" y="${inicio}" width="${lado}" height="${lado}"\n  fill="${cor}" opacity="${opacidade}" transform="rotate(${rotacao} 150 150)"/>`;
  } else {
    // triângulo: calcula os 3 pontos com base na altura escolhida
    const altura = tamanho * 1.7;
    const pontos = `150,${(150 - altura / 2).toFixed(0)} ${(150 + altura / 2).toFixed(0)},${(150 + altura / 2).toFixed(0)} ${(150 - altura / 2).toFixed(0)},${(150 + altura / 2).toFixed(0)}`;
    trianguloLab.setAttribute('points', pontos);
    trianguloLab.setAttribute('fill', cor);
    trianguloLab.setAttribute('opacity', opacidade);
    codigo = `<polygon points="${pontos}" fill="${cor}" opacity="${opacidade}"\n  transform="rotate(${rotacao} 150 150)"/>`;
  }

  codigoLab.textContent = codigo;
}

[formaSelect, corInput, tamanhoInput, rotacaoInput, opacidadeInput].forEach((elemento) => {
  elemento.addEventListener('input', atualizarLaboratorio);
});

atualizarLaboratorio();
