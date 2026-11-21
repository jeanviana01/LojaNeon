# LojaNeon

Vitrine gamer demonstrativa para portfólio. O catálogo reúne PCs, peças, monitores e periféricos com fotos dos modelos.

**[Acessar a LojaNeon](https://jeanviana01.github.io/LojaNeon/)**

## Funcionalidades

- Busca por nome ou departamento, com suporte a termos sem acento.
- Filtros por departamento e paginação de 24 itens.
- Carrinho com adição e remoção de unidades e cálculo de subtotal em reais.
- Layout responsivo para celulares e computadores.

## Como abrir e editar

Abra `index.html` no navegador. O projeto usa HTML, CSS e JavaScript puro e dispensa instalação ou compilação. As fotos são carregadas de sites externos e requerem conexão com a internet.

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Estrutura da página, vitrine e carrinho. |
| `styles.css` | Identidade visual em preto, verde e vermelho e regras de responsividade. |
| `catalog.js` | Cadastro dos produtos, departamentos, preços demonstrativos e URLs das fotos. |
| `app.js` | Busca, filtros, paginação e operações do carrinho. |

Edite `catalog.js` para adicionar produtos. Cada item tem os campos `name`, `category`, `price` (valor numérico em reais) e `photo` (endereço da foto).

## Publicação

O GitHub Pages publica a pasta raiz da branch `main`. Envie as alterações para essa branch para atualizar o site.

## Sobre a demonstração

O carrinho é simulado e é reiniciado quando a página é recarregada. Os preços são ilustrativos e a página não realiza compras nem pagamentos. Os modelos e fotos de referência vêm de Pichau, KaBuM! e TerabyteShop, com imagem de abertura do Unsplash.
