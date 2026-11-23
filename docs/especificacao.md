# Especificação técnica

## Objetivo

Criar um portfólio profissional de página única para apresentar a atuação em Análise de Dados e Business Intelligence, a formação, a experiência e os projetos de Análise de Dados e Desenvolvimento de Software.

## Seções

| Seção | Conteúdo previsto |
| --- | --- |
| Início | Nome, apresentação profissional e fotografia. |
| Sobre | Trajetória e áreas de atuação. |
| Competências | Ferramentas, métodos e competências aplicadas. |
| Projetos | Catálogo de projetos concluídos e em desenvolvimento, com filtros por categoria. |
| Experiência | Atuação profissional, responsabilidades e resultados que possam ser divulgados. |
| Formação | Formação acadêmica, cursos e certificações fornecidos pelo titular do portfólio. |
| Contato | Canais profissionais públicos escolhidos pelo titular do portfólio. |

## Arquitetura

- Aplicação estática em HTML5, CSS3 e JavaScript puro, com versionamento em Git e publicação posterior no GitHub Pages.
- `index.html` mantém o conteúdo semântico em português do Brasil. A navegação usa links para âncoras da própria página.
- `css/style.css` concentra os estilos. `js/projects.js` fica reservado ao catálogo local e `js/main.js` à inicialização das interações.
- Recursos locais usam caminhos relativos. React, TypeScript, frameworks CSS, bibliotecas de animação, backend e banco de dados ficam fora da arquitetura.
- Imagens de projetos ficam em `assets/images/projects/`. A fotografia profissional pode ficar diretamente em `assets/images/`, e documentos públicos ficam em `assets/documents/`.

## Interface e acessibilidade previstas

- Tema claro corporativo como padrão, com tema escuro opcional.
- Apresentação com texto à esquerda e fotografia à direita em telas largas. Em telas estreitas, empilhar texto e foto nessa ordem.
- Preservar a navegação por teclado, o foco visível, a hierarquia de títulos e o contraste da interface nos temas adotados.
- Definir texto alternativo apropriado ao contexto de cada imagem.
- Manter a interatividade moderada e as animações discretas. Respeitar a preferência por movimento reduzido.

## Projetos

Cada projeto deverá ter título, descrição, categoria e status. Os estados previstos são **Concluído** e **Em desenvolvimento**. Links e imagens podem ser incluídos quando houver material público correspondente. As categorias serão definidas a partir do catálogo real.

O filtro deverá permitir visualizar todos os projetos e selecionar uma categoria com o teclado. A renderização de títulos e descrições deve inserir os valores como texto, e os links devem ser revisados antes de entrar no catálogo.

## Segurança e privacidade

- Manter credenciais, tokens e informações confidenciais fora dos arquivos do site e do repositório.
- Usar apenas imagens, documentos e dados com divulgação autorizada. Excluir dados corporativos.
- A seção Contato indicará canais profissionais públicos. Coleta de informações pessoais, monitoramento e rastreamento ficam fora do escopo.

## Escopo da etapa inicial

A etapa entrega a estrutura de diretórios, as sete seções com conteúdo provisório, os estilos de base, os pontos de entrada JavaScript e a documentação. O desenho final, a fotografia, o conteúdo profissional, o tema escuro, o catálogo, os filtros, as animações e a publicação pertencem a etapas posteriores.
