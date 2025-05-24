# Documentação do Código JavaScript

## Visão Geral

Neste arquivo, irei explicar o código JavaScript (`script.js`) que desenvolvi para o site sobre TI Verde. O JavaScript é responsável por três principais funcionalidades:

1. Carregar dados do arquivo JSON
2. Criar gráficos interativos usando a biblioteca Chart.js
3. Gerar cards com informações detalhadas das empresas

## Estrutura do Arquivo script.js

O arquivo é organizado em 4 partes principais:

1. Função para carregar os dados
2. Função para criar o gráfico de barras (economia de energia)
3. Função para criar o gráfico de pizza (práticas implementadas)
4. Função para mostrar detalhes das empresas
5. Event listener para inicializar tudo quando a página carrega

## Carregamento de Dados

```javascript
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
```

### Explicação:

- **Função assíncrona**: Utilizei `async` para poder usar `await` dentro da função, o que torna o código mais legível.
- **Try/Catch**: Implementei tratamento de erro para lidar com possíveis falhas no carregamento dos dados.
- **Fetch API**: Usei `fetch()` para carregar o arquivo JSON de forma assíncrona.
- **await**: Aguarda a conclusão da requisição antes de continuar a execução.
- **Parsing JSON**: Converte a resposta para formato JavaScript com `.json()`.
- **Retorno de dados**: Retorna os dados carregados ou um array vazio em caso de erro.

## Criação do Gráfico de Barras

```javascript
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
                    '#2e8b57', // EcoData
                    '#66cdaa', // GreenTech
                    '#8fbc8f'  // SustentTI
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
```

### Explicação:

- **Contexto do Canvas**: Obtém o contexto 2D do elemento canvas para desenhar o gráfico.
- **Extração de dados**: Utilizo o método `.map()` para extrair os nomes das empresas e os valores de economia de energia.
- **Instanciação do Chart.js**: Crio um novo gráfico de barras usando a biblioteca Chart.js.
- **Configurações do gráfico**:
  - **type: 'bar'**: Define o tipo de gráfico como barras.
  - **data**: Configura os dados a serem exibidos.
  - **backgroundColor/borderColor**: Define as cores para cada barra, seguindo a paleta verde do site.
  - **options**: Configurações adicionais para melhorar a visualização.
  - **responsive: true**: Torna o gráfico responsivo.
  - **plugins**: Configurações para título, legenda e tooltips.
  - **scales**: Configuração dos eixos, incluindo rótulos e formatação de valores.

## Criação do Gráfico de Pizza

```javascript
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
                    '#2e8b57', // EcoData
                    '#66cdaa', // GreenTech
                    '#8fbc8f'  // SustentTI
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
```

### Explicação:

- **Semelhante ao gráfico anterior**, mas com algumas diferenças importantes:
- **type: 'pie'**: Define o tipo como gráfico de pizza.
- **labels**: Usa as práticas implementadas como rótulos.
- **data**: Usa os valores de economia como dados para o tamanho das fatias.
- **tooltip personalizado**: Mostra o nome da empresa e a porcentagem de economia ao passar o mouse.
- A estrutura é similar ao gráfico de barras, mantendo a consistência visual.

## Criação dos Cards de Empresas

```javascript
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
```

### Explicação:

- **Seleção do Container**: Uso `getElementById` para selecionar o elemento onde os cards serão inseridos.
- **Limpeza do container**: `container.innerHTML = ''` remove qualquer conteúdo anterior.
- **Loop forEach**: Percorre cada empresa no array de dados.
- **Criação dinâmica de elementos**: Cria um novo elemento div para cada empresa.
- **Template literals**: Uso crases (` `) para criar strings multi-linha com interpolação de variáveis.
- **Map para lista de benefícios**: Transformo o array de benefícios em elementos `<li>` usando `.map()` e `.join('')`.
- **Inserção no DOM**: Adiciono o card ao container usando `appendChild()`.

## Inicialização

```javascript
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
```

### Explicação:

- **Event listener**: Aguarda o carregamento completo do DOM antes de executar o código.
- **Função assíncrona**: Permite o uso de `await` para carregar os dados.
- **Verificação de dados**: Verifica se os dados foram carregados com sucesso.
- **Inicialização condicional**: Só cria gráficos e cards se houver dados disponíveis.
- **Tratamento de erro**: Exibe mensagens de erro amigáveis se os dados não forem carregados.
- **querySelectorAll**: Seleciona todas as caixas de gráficos para exibir mensagem de erro em cada uma.

## Conceitos JavaScript Aplicados

Neste projeto, apliquei diversos conceitos modernos de JavaScript:

1. **ES6+ Features**: 
   - Arrow Functions
   - Template Literals
   - Métodos de array (map, forEach)
   - Async/Await
   - Destructuring

2. **Manipulação do DOM**:
   - Seleção de elementos
   - Criação dinâmica de elementos
   - Modificação de conteúdo
   - Event Listeners

3. **Requisições Assíncronas**:
   - Fetch API
   - Tratamento de promessas
   - Tratamento de erros (try/catch)

4. **Integração com Bibliotecas**:
   - Uso da API do Chart.js
   - Configuração de gráficos interativos

## Desafios e Aprendizados

Durante o desenvolvimento do JavaScript, enfrentei alguns desafios:

1. **Carregamento assíncrono**: Aprendi a usar async/await para lidar com operações assíncronas de forma mais legível.

2. **Formatação de dados**: Precisei transformar os dados do JSON em formatos adequados para os gráficos.

3. **Personalização dos gráficos**: A documentação do Chart.js foi essencial para entender como personalizar tooltips e formatação.

4. **Geração dinâmica de HTML**: Aprendi a criar elementos HTML dinamicamente com JavaScript, o que torna o site mais interativo.

## Conclusão

O código JavaScript foi essencial para transformar dados estáticos em uma experiência interativa e informativa. Através das funções desenvolvidas, consegui carregar dados externos, criar visualizações gráficas e apresentar informações detalhadas de forma organizada.

A combinação de HTML para estrutura, CSS para estilo e JavaScript para interatividade permitiu criar um site completo sobre TI Verde que não apenas informa, mas também engaja o usuário através de elementos visuais dinâmicos.

---

### Observação para o Professor:

Este foi meu primeiro projeto utilizando JavaScript para manipulação de dados e criação de gráficos. Estou aberto a sugestões e melhorias para tornar o código mais eficiente e seguir as melhores práticas. 