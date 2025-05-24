# Documentação do Arquivo JSON

## O que é o arquivo dados.json?

O arquivo `dados.json` contém informações simuladas sobre empresas que implementaram práticas de TI Verde. Ele serve como uma "mini-base de dados" para o site, permitindo que as informações sejam carregadas dinamicamente pelo JavaScript e exibidas nos gráficos e cards.

## Por que escolhi usar JSON?

Escolhi o formato JSON (JavaScript Object Notation) pelos seguintes motivos:

1. **Fácil de entender**: A estrutura de chave-valor é simples e intuitiva
2. **Nativo do JavaScript**: O JavaScript pode converter JSON para objetos facilmente
3. **Formato leve**: Ocupa pouco espaço e é rápido para transferir
4. **Flexibilidade**: Permite representar dados estruturados de forma hierárquica
5. **Prática real**: É muito usado em APIs e aplicações web reais

## Estrutura do arquivo

O arquivo JSON contém um array de objetos, onde cada objeto representa uma empresa:

```json
[
  {
    "nome": "EcoData",
    "pratica": "Virtualização de servidores",
    "economiaEnergia": 25,
    "descricao": "A EcoData implementou uma estratégia de virtualização que reduziu o número de servidores físicos em 70%, diminuindo significativamente o consumo de energia e a necessidade de refrigeração do data center.",
    "anoImplementacao": 2019,
    "retornoInvestimento": "18 meses",
    "beneficiosAdicionais": [
      "Redução de espaço físico",
      "Menor necessidade de manutenção",
      "Maior flexibilidade para escalar recursos"
    ]
  },
  // Outros objetos de empresas...
]
```

## Detalhamento dos campos

Cada empresa no arquivo JSON possui os seguintes campos:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `nome` | String | Nome da empresa |
| `pratica` | String | Prática de TI Verde implementada |
| `economiaEnergia` | Número | Porcentagem de economia de energia obtida |
| `descricao` | String | Descrição detalhada da implementação |
| `anoImplementacao` | Número | Ano em que a prática foi implementada |
| `retornoInvestimento` | String | Tempo necessário para recuperar o investimento |
| `beneficiosAdicionais` | Array de Strings | Lista de benefícios extras obtidos |

## Como o JSON é utilizado no site

O arquivo JSON é carregado pelo JavaScript usando a função `fetch()`. Após o carregamento, os dados são processados para:

1. **Criar o gráfico de barras**: Mostra a economia de energia de cada empresa
2. **Criar o gráfico de pizza**: Compara as diferentes práticas implementadas
3. **Gerar cards informativos**: Apresenta detalhes sobre cada empresa

Exemplo de como os dados são extraídos no JavaScript:

```javascript
// Extrair nomes das empresas
const labels = dados.map(empresa => empresa.nome);

// Extrair valores de economia de energia
const economias = dados.map(empresa => empresa.economiaEnergia);
```

## Empresas simuladas

Criei três empresas fictícias com diferentes práticas de TI Verde:

1. **EcoData**: Implementou virtualização de servidores (25% de economia)
2. **GreenTech**: Instalou painéis solares no data center (40% de economia)
3. **SustentTI**: Adotou descarte sustentável de e-lixo (10% de economia)

Cada empresa tem sua própria história e resultados, o que permite comparar diferentes abordagens para sustentabilidade em TI.

## Benefícios do uso de dados externos

Ao separar os dados em um arquivo JSON, consegui:

1. **Separar dados da lógica**: O código JavaScript fica mais limpo e organizado
2. **Facilitar atualizações**: Posso modificar os dados sem alterar o código
3. **Simular um ambiente real**: Na prática, sites buscam dados de APIs ou bancos de dados
4. **Tornar o site mais dinâmico**: O conteúdo é gerado conforme os dados carregados

## Desafios enfrentados

Durante o trabalho com o arquivo JSON, enfrentei alguns desafios:

1. **Carregamento assíncrono**: Precisei aprender a usar async/await para carregar os dados
2. **Acesso local**: Em alguns navegadores, é necessário um servidor local para carregar arquivos JSON
3. **Formatação correta**: Precisei garantir que o JSON estivesse bem formatado para evitar erros

## Conclusão

O uso de um arquivo JSON para armazenar dados foi uma excelente oportunidade de aprendizado. Permitiu que eu separasse os dados da interface e criasse uma experiência mais dinâmica, simulando como sites reais funcionam ao buscar informações de fontes externas.

Esta abordagem também facilitaria a expansão futura do site, pois novos dados podem ser adicionados simplesmente incluindo mais objetos no arquivo JSON, sem necessidade de alterar o código HTML ou JavaScript. 