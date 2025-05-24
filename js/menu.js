document.addEventListener('DOMContentLoaded', function() {
    // Seleciona elementos do menu
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const dropdownBtns = document.querySelectorAll('.dropbtn');
    
    // Controle do Menu Hamburger
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        hamburger.classList.toggle('active');
        nav.classList.toggle('menu-open');
    });
    
    // Simplificando o gerenciamento de dropdown com delegação de eventos
    document.addEventListener('click', function(event) {
        const target = event.target;
        
        // Verifica se o clique foi em um botão dropdown
        if (target.classList.contains('dropbtn') || target.closest('.dropbtn')) {
            event.preventDefault();
            
            // Obtém o elemento dropdown pai do botão clicado
            const dropdown = target.classList.contains('dropbtn') 
                ? target.parentElement 
                : target.closest('.dropbtn').parentElement;
            
            // Em mobile, alterna a classe de ativo
            if (window.innerWidth <= 768) {
                // Verifica se o dropdown atual já está ativo
                const isActive = dropdown.classList.contains('dropdown-active');
                
                // Remove a classe ativa de todos os dropdowns
                const allDropdowns = document.querySelectorAll('.dropdown');
                allDropdowns.forEach(item => {
                    if (item !== dropdown) {
                        item.classList.remove('dropdown-active');
                    }
                });
                
                // Alterna a classe para o dropdown atual
                dropdown.classList.toggle('dropdown-active');
            }
        } 
        // Se clicou fora de qualquer dropdown e fora do hamburger
        else if (!target.closest('.dropdown') && !target.closest('.hamburger')) {
            // Fecha todos os dropdowns
            const allDropdowns = document.querySelectorAll('.dropdown');
            allDropdowns.forEach(dropdown => {
                dropdown.classList.remove('dropdown-active');
            });
            
            // Se estiver em mobile e clicou fora do menu, fecha o menu também
            if (window.innerWidth <= 768 && !target.closest('nav')) {
                nav.classList.remove('menu-open');
                hamburger.classList.remove('active');
            }
        }
    });
    
    // Garante que os links dentro do dropdown funcionem corretamente
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Em modo mobile, fecha o menu após clicar em um link
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    nav.classList.remove('menu-open');
                    hamburger.classList.remove('active');
                    
                    const allDropdowns = document.querySelectorAll('.dropdown');
                    allDropdowns.forEach(dropdown => {
                        dropdown.classList.remove('dropdown-active');
                    });
                }, 100);
            }
        });
    });
    
    // Ajusta o menu em caso de redimensionamento
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Em telas maiores, remove todas as classes mobile
            hamburger.classList.remove('active');
            nav.classList.remove('menu-open');
            
            const allDropdowns = document.querySelectorAll('.dropdown');
            allDropdowns.forEach(dropdown => {
                dropdown.classList.remove('dropdown-active');
            });
        }
    });
}); 