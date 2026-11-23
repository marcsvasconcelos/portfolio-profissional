# Portfólio profissional

Portfólio de página única sobre Análise de Dados, Business Intelligence e Desenvolvimento de Soluções Digitais. O HTML contém sete seções e identifica os dados profissionais que ainda precisam de validação editorial.

## Tecnologias

HTML5, CSS3 e JavaScript puro. O projeto funciona diretamente no navegador, sem instalação de dependências ou etapa de compilação.

## Estrutura

```text
PORTIFÓLIO GITHUB - MARCOS VASCONCELOS/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── projects.js
├── demos/
│   └── abs/
│       ├── index.html
│       ├── style.css
│       └── main.js
├── assets/
│   ├── images/
│   │   └── projects/
│   └── documents/
├── docs/
│   ├── especificacao.md
│   └── documentacao-notion.md
├── AGENTS.md
├── README.md
└── .gitignore
```

- `index.html` reúne o cabeçalho, a apresentação, a navegação e as sete seções da página.
- `css/style.css` reúne o tema claro, os cartões, os estados de foco e as adaptações de layout.
- `js/main.js` controla tema, menu móvel, filtros e apresentação segura dos projetos; `js/projects.js` guarda o catálogo local.
- `demos/abs/` contém um painel demonstrativo independente em HTML, CSS e JavaScript. Equipes e números foram criados para demonstração e não representam dados operacionais reais.
- `assets/` recebe imagens e documentos públicos. A fotografia profissional está em `assets/images/projects/`; `assets/documents/` ainda não contém currículo em PDF.
- [Especificação técnica](docs/especificacao.md) registra os requisitos e o escopo de implementação.
- [AGENTS.md](AGENTS.md) contém as diretrizes gerais de desenvolvimento. [Documentação Notion](docs/documentacao-notion.md) preserva as regras originais de documentação.
- `.gitignore` lista arquivos locais, temporários e configurações de ambiente a ignorar em um futuro versionamento.

## Execução local

1. Abra o arquivo `index.html`, que está na raiz do projeto, diretamente no navegador.
2. Após editar um arquivo, recarregue a página para conferir o resultado.

## Publicação

Repositório: https://github.com/marcsvasconcelos/portfolio-profissional

Site: https://marcsvasconcelos.github.io/portfolio-profissional/

O GitHub Pages utiliza a raiz da branch `main`. Para continuar as edições, atualize os arquivos, confira o resultado localmente e publique uma nova versão no repositório.

## Estado da interface

O catálogo contém cinco projetos independentes: Dashboard Executivo - ABS, Relatório de Absenteísmo, Análise de Recorrência, Painel de Controle Operacional e Portfólio Profissional. Os filtros usam as categorias Análise de Dados e BI, Desenvolvimento Web, e Python e Automação. O Dashboard Executivo - ABS possui uma demonstração local com dados fictícios e uma captura criada a partir dela. O Painel de Controle Operacional possui repositório, demonstração pública e captura.
