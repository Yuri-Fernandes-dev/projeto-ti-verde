document.addEventListener('DOMContentLoaded', function() {
    // Seleciona elementos do menu
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const dropdownBtns = document.querySelectorAll('.dropbtn');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Controle do Menu Hamburger
    hamburger.addEventListener('click', function() {
        // Toggle da classe active para o ícone hamburger
        hamburger.classList.toggle('active');
        
        // Toggle da classe menu-open para a navegação
        nav.classList.toggle('menu-open');
        
        // Fechar todos os submenus quando o menu principal é fechado
        if (!nav.classList.contains('menu-open')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('dropdown-active');
            });
        }
    });
    
    // Garante que todos os menus comecem fechados
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('dropdown-active');
    });
    
    // Adiciona evento de clique para cada botão dropdown
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Previne o comportamento padrão de navegação do link
            e.preventDefault();
            e.stopPropagation();
            
            // Pega o elemento pai (dropdown)
            const dropdown = this.parentElement;
            
            // Verifica se está em modo móvel (largura menor que 769px)
            if (window.innerWidth <= 768) {
                // Verifica se o dropdown atual está aberto
                const isOpen = dropdown.classList.contains('dropdown-active');
                
                // Fecha todos os dropdowns primeiro
                dropdowns.forEach(item => {
                    item.classList.remove('dropdown-active');
                });
                
                // Se o dropdown não estava aberto, abre-o
                if (!isOpen) {
                    dropdown.classList.add('dropdown-active');
                }
            }
        });
    });
    
    // Adiciona evento para fechar menu quando clicar fora dele
    document.addEventListener('click', function(e) {
        const isClickInsideNav = nav.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);
        
        // Se clicar fora do menu e fora do hamburger, fechar menu
        if (!isClickInsideNav && !isClickOnHamburger && window.innerWidth <= 768) {
            nav.classList.remove('menu-open');
            hamburger.classList.remove('active');
            
            // Fechar todos os dropdowns também
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('dropdown-active');
            });
        }
        
        // Fechar dropdown quando clicar fora dele, mas dentro do menu
        if (isClickInsideNav && !e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('dropdown-active');
            });
        }
    });
    
    // Ajuste para redimensionamento de tela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Em telas maiores, remover classes mobile
            hamburger.classList.remove('active');
            nav.classList.remove('menu-open');
            
            // E remover dropdown ativo
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('dropdown-active');
            });
        }
    });
    
    // Garantir que os links dentro do dropdown funcionem normalmente
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Permite que o link funcione normalmente
            e.stopPropagation();
            
            // Fecha o menu após clicar em um link (em mobile)
            if (window.innerWidth <= 768) {
                nav.classList.remove('menu-open');
                hamburger.classList.remove('active');
                
                // Opcional: Tempo para ver o link ativo antes de fechar
                setTimeout(() => {
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('dropdown-active');
                    });
                }, 300);
            }
        });
    });
}); 