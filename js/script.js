// Função para carregar os dados do JSON
async function carregarDados() {
    try {
        const resposta = await fetch('js/dados.json');
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Erro ao carregar os dados:', erro);
        return [];
    }
}

// Função para criar o gráfico de economia de energia
function criarGraficoEconomia(dados) {
    const ctx = document.getElementById('economiaChart').getContext('2d');
    
    const labels = dados.map(empresa => empresa.nome);
    const economias = dados.map(empresa => empresa.economiaEnergia);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Economia de Energia (%)',
                data: economias,
                backgroundColor: [
                    '#2e8b57', // Nexxio
                    '#66cdaa', // CABTI
                    '#8fbc8f'  // Powertech
                ],
                borderColor: [
                    '#1a5c38',
                    '#3cb371',
                    '#548b54'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Porcentagem de Economia de Energia por Empresa'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.raw}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Economia (%)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Função para criar o gráfico de práticas implementadas
function criarGraficoPraticas(dados) {
    const ctx = document.getElementById('praticasChart').getContext('2d');
    
    const praticas = dados.map(empresa => empresa.pratica);
    const empresas = dados.map(empresa => empresa.nome);
    const economias = dados.map(empresa => empresa.economiaEnergia);
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: praticas,
            datasets: [{
                data: economias,
                backgroundColor: [
                    '#2e8b57', // Nexxio
                    '#66cdaa', // CABTI
                    '#8fbc8f'  // Powertech
                ],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Impacto de Diferentes Práticas de TI Verde'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const index = context.dataIndex;
                            return `${empresas[index]}: ${context.raw}% de economia`;
                        }
                    }
                }
            }
        }
    });
}

// Função para criar os cards com detalhes das empresas
function mostrarDetalhesEmpresas(dados) {
    const container = document.getElementById('empresasInfo');
    container.innerHTML = ''; // Limpa o conteúdo anterior
    
    dados.forEach(empresa => {
        const card = document.createElement('div');
        card.className = 'company-card';
        
        // Criar conteúdo do card
        const conteudo = `
            <h4>${empresa.nome}</h4>
            <p><strong>Prática Implementada:</strong> ${empresa.pratica}</p>
            <p><strong>Ano de Implementação:</strong> ${empresa.anoImplementacao}</p>
            <p><strong>Retorno do Investimento:</strong> ${empresa.retornoInvestimento}</p>
            <p>${empresa.descricao}</p>
            <div class="economy-badge">${empresa.economiaEnergia}% de economia de energia</div>
            <div style="margin-top: 1rem;">
                <strong>Benefícios Adicionais:</strong>
                <ul>
                    ${empresa.beneficiosAdicionais.map(beneficio => `<li>${beneficio}</li>`).join('')}
                </ul>
            </div>
        `;
        
        card.innerHTML = conteudo;
        container.appendChild(card);
    });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', async () => {
    const dados = await carregarDados();
    
    if (dados.length > 0) {
        criarGraficoEconomia(dados);
        criarGraficoPraticas(dados);
        mostrarDetalhesEmpresas(dados);
    } else {
        // Exibir mensagem de erro se não conseguir carregar os dados
        document.getElementById('empresasInfo').innerHTML = '<p class="error">Não foi possível carregar os dados das empresas.</p>';
        document.querySelectorAll('.chart-box').forEach(box => {
            box.innerHTML = '<p class="error">Não foi possível carregar os gráficos.</p>';
        });
    }
}); 