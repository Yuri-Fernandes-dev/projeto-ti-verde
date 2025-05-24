document.addEventListener('DOMContentLoaded', function() {
    // Elementos básicos do menu
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    // Controle do botão hamburger
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('menu-open');
    });

    // Seleção de todos os botões dropdown (agora são elementos button)
    const dropdownButtons = document.querySelectorAll('.dropdown button.dropbtn');
    
    // Adicionar evento de clique a cada botão dropdown
    dropdownButtons.forEach(function(button) {
        const dropdown = button.parentElement;
        
        button.addEventListener('click', function(e) {
            // Prevenir comportamento padrão e evitar propagação
            e.preventDefault();
            e.stopPropagation();
            
            // Em dispositivo móvel, toggle da classe
            if (window.innerWidth <= 768) {
                dropdown.classList.toggle('dropdown-active');
            }
        });
    });
    
    // Fechar dropdown ao clicar fora
    document.addEventListener('click', function(e) {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        // Se o clique foi fora de qualquer dropdown
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(function(dropdown) {
                dropdown.classList.remove('dropdown-active');
            });
            
            // Se em mobile e o clique foi fora do menu e do hamburger
            if (window.innerWidth <= 768 && !e.target.closest('nav') && !e.target.closest('.hamburger')) {
                nav.classList.remove('menu-open');
                hamburger.classList.remove('active');
            }
        }
    });
    
    // Garantir que os links dentro do dropdown funcionem corretamente
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                setTimeout(function() {
                    const dropdowns = document.querySelectorAll('.dropdown');
                    dropdowns.forEach(function(dropdown) {
                        dropdown.classList.remove('dropdown-active');
                    });
                    
                    nav.classList.remove('menu-open');
                    hamburger.classList.remove('active');
                }, 100);
            }
        });
    });

    // Ajustar menu ao redimensionar a janela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(function(dropdown) {
                dropdown.classList.remove('dropdown-active');
            });
            
            nav.classList.remove('menu-open');
            hamburger.classList.remove('active');
        }
    });
}); 