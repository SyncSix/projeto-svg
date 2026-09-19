/* Menu mobile: abre/fecha a lista de links e fecha ao clicar em um item */
document.addEventListener('DOMContentLoaded', () => {
  const botaoMenu = document.getElementById('botao-menu');
  const linksNav = document.getElementById('links-nav');

  if (!botaoMenu || !linksNav) return; // evita erro caso os ids não existam no HTML

  function alternarMenu() {
    const aberto = linksNav.classList.toggle('aberto');
    botaoMenu.classList.toggle('aberto', aberto);
    botaoMenu.setAttribute('aria-expanded', aberto);
  }

  botaoMenu.addEventListener('click', alternarMenu);

  linksNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      linksNav.classList.remove('aberto');
      botaoMenu.classList.remove('aberto');
      botaoMenu.setAttribute('aria-expanded', 'false');
    });
  });
});