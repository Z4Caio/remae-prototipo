// Menu hambúrguer: abre e fecha o menu no celular
const botaoMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');

if (botaoMenu && menu) {
  botaoMenu.addEventListener('click', function () {
    const aberto = menu.classList.toggle('aberto');

    // Troca o ícone: ☰ quando fechado, ✕ quando aberto
    botaoMenu.textContent = aberto ? '✕' : '☰';
    botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');

    // Impede a página de rolar por trás enquanto o menu está aberto
    document.body.style.overflow = aberto ? 'hidden' : '';
  });
}