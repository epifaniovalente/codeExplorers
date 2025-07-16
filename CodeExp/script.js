// Seleciona o botão de menu e o menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

// Adiciona um 'escutador' de eventos de clique ao botão de menu
menuToggle.addEventListener('click', () => {
    // Alterna a classe 'is-open' no menu mobile
    // Se 'is-open' estiver presente, remove; se não estiver, adiciona.
    mobileNav.classList.toggle('is-open');

    // Opcional: Se quiser que o ícone do botão mude (ex: de hambúrguer para X)
    // menuToggle.querySelector('i').classList.toggle('fa-bars');
    // menuToggle.querySelector('i').classList.toggle('fa-xmark');
});

// Opcional: Fechar o menu ao clicar em um link (para rolagem suave)
const navLinks = document.querySelectorAll('.mobile-nav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileNav.classList.contains('is-open')) {
            mobileNav.classList.remove('is-open');
            // Opcional: Se mudar o ícone, resetar ele aqui também
            // menuToggle.querySelector('i').classList.remove('fa-xmark');
            // menuToggle.querySelector('i').classList.add('fa-bars');
        }
    });
});