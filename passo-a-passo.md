# Como Criei Meu Site sobre TI Verde - Passo a Passo

## 1. Planejamento Inicial

Antes de começar a programar, precisei planejar:
- Qual seria o conteúdo do site
- Quais páginas ele teria
- Como seria o design
- Quais tecnologias eu usaria

Decidi fazer um site sobre TI Verde com três páginas: uma sobre o conceito de TI Verde, outra sobre o ODS 12, e uma terceira com dados de empresas sustentáveis.

## 2. Organização dos Arquivos

Criei a seguinte estrutura de pastas:
- Uma pasta para CSS
- Uma pasta para JavaScript
- Uma pasta para imagens

Cada página HTML ficaria na raiz do projeto.

## 3. Criação do HTML Básico

Comecei criando o arquivo `index.html` com a estrutura básica:
- Doctype e tags HTML
- Head com meta tags e título
- Body com header, main e footer
- Links para CSS e JavaScript

## 4. Desenvolvimento do Conteúdo

Para cada página, segui estes passos:
1. Criei a estrutura com header, main e footer
2. Adicionei o conteúdo em seções lógicas
3. Organizei o texto em títulos, parágrafos e listas
4. Adicionei classes CSS para estilização posterior

Primeiro fiz uma versão onde tudo estava em uma única página, mas depois separei em três arquivos HTML diferentes.

## 5. Criação do Menu de Navegação

Criei um menu de navegação simples:
- Uma lista não ordenada (`<ul>`)
- Itens de lista (`<li>`) para cada página
- Links (`<a>`) dentro de cada item
- Estilizei para ficar na horizontal

## 6. Estilização com CSS

No arquivo `styles.css`:
1. Defini as variáveis de cores (verdes e branco)
2. Criei um reset básico para remover margens e paddings
3. Defini estilos para o corpo do documento
4. Estilizei o cabeçalho e o menu
5. Criei estilos para cada seção do conteúdo
6. Adicionei estilos para tornar o site responsivo

Usei muito as propriedades:
- `display: flex` para alinhar elementos
- `display: grid` para criar layouts em grade
- `media queries` para ajustar o layout em telas pequenas

## 7. Criação do Arquivo JSON

Para os dados das empresas, criei um arquivo JSON com informações fictícias:
- Nome da empresa
- Prática sustentável implementada
- Porcentagem de economia de energia
- Descrição da prática
- Ano de implementação
- Benefícios adicionais

```json
[
  {
    "nome": "EcoData",
    "pratica": "Virtualização de servidores",
    "economiaEnergia": 25,
    ...
  },
  ...
]
```

## 8. Desenvolvimento do JavaScript

No arquivo `script.js`:
1. Criei uma função para carregar os dados do JSON
2. Desenvolvi funções para criar os gráficos usando Chart.js
3. Criei uma função para mostrar detalhes das empresas
4. Adicionei um event listener para executar tudo quando a página carregasse

O código ficou mais ou menos assim:
```javascript
async function carregarDados() {
    // Código para carregar o JSON
}

function criarGraficos(dados) {
    // Código para criar os gráficos
}

document.addEventListener('DOMContentLoaded', async () => {
    const dados = await carregarDados();
    // Usar os dados
});
```

## 9. Integração do Chart.js

Para criar os gráficos:
1. Adicionei o script do Chart.js no HTML
2. Criei elementos canvas para os gráficos
3. Usei JavaScript para desenhar os gráficos com os dados
4. Configurei cores, legendas e interatividade

## 10. Teste e Ajustes

Depois de criar tudo:
1. Testei o site abrindo o HTML no navegador
2. Verifiquei se tudo carregava corretamente
3. Testei em diferentes tamanhos de tela
4. Corrigi problemas encontrados

## 11. Desafios que Enfrentei

Durante o desenvolvimento:
- Tive dificuldade para fazer o download de imagens (resolvi criando placeholders)
- Precisei aprender como carregar dados JSON com JavaScript
- Foi difícil fazer o layout responsivo no início
- Tive que pesquisar como usar o Chart.js

## 12. Aprendizados

Ao final do projeto, aprendi:
- Como estruturar um site com múltiplas páginas
- Como usar HTML semântico
- Como aplicar estilos com CSS
- Como trabalhar com variáveis CSS
- Como usar flexbox e grid
- Como carregar dados com JavaScript
- Como criar gráficos interativos

## Conclusão

Criar este site foi desafiador, mas muito gratificante! Comecei sem saber muito sobre desenvolvimento web, mas pesquisando e praticando, consegui desenvolver um site funcional e responsivo. Ainda tenho muito a aprender, mas estou orgulhoso do resultado final. 