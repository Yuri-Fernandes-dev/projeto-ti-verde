document.addEventListener('DOMContentLoaded', function() {
    // Apenas controlar o menu hamburger para abrir/fechar o menu principal
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    // Controle do botão hamburger - única funcionalidade necessária
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('menu-open');
    });

    // Fechar o menu ao clicar em qualquer link
    const allLinks = document.querySelectorAll('nav a');
    allLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                // Pequeno atraso para mostrar a página antes de fechar o menu
                setTimeout(function() {
                    nav.classList.remove('menu-open');
                    hamburger.classList.remove('active');
                }, 100);
            }
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            !event.target.closest('nav') && 
            !event.target.closest('.hamburger')) {
            nav.classList.remove('menu-open');
            hamburger.classList.remove('active');
        }
    });
}); 