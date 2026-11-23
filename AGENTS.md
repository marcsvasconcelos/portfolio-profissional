# Diretrizes de desenvolvimento do portfólio profissional

Este repositório contém um portfólio estático em HTML5, CSS3 e JavaScript puro. Consulte [docs/especificacao.md](docs/especificacao.md) para os requisitos do produto. As instruções originais de documentação GitHub + Notion foram preservadas integralmente em [docs/documentacao-notion.md](docs/documentacao-notion.md). Leia esse documento sempre que a tarefa envolver documentação no Notion.

## Arquitetura

- Priorize HTML semântico, CSS organizado por responsabilidades e JavaScript puro.
- Mantenha conteúdo, apresentação e comportamento em seus arquivos próprios.
- Evite dependências externas desnecessárias.
- Preserve caminhos relativos e compatibilidade com publicação futura no GitHub Pages.

## Qualidade e acessibilidade

- Escreva código legível e organizado, com nomes de classes e funções compreensíveis.
- Reutilize padrões existentes e evite duplicação desnecessária.
- Preserve navegação por teclado, foco visível, contraste e hierarquia de títulos.
- Garanta adaptação a telas pequenas, sem sobreposição ou rolagem horizontal indevida.
- Respeite a preferência por movimento reduzido quando houver efeitos visuais.

## Segurança e conteúdo

- Não inclua credenciais, tokens, dados corporativos ou informações confidenciais.
- Não adicione rastreamento nem transmita dados pessoais a serviços externos.
- Não apresente informações profissionais fictícias como fatos. Identifique claramente conteúdo provisório.

## Verificação

- Valide cada alteração por meios pertinentes e informe os testes executados e seus resultados.
- Distinga verificações reais de testes pendentes.
- Declare uma funcionalidade concluída somente quando houver evidência no código e na verificação.

## Git e publicação

- Não execute commit ou push sem autorização explícita.
- Não altere configurações do repositório sem solicitação.
- Não execute comandos destrutivos.
- Não publique o site sem autorização explícita.

## Documentação

- Preserve a documentação existente e use [docs/especificacao.md](docs/especificacao.md) como referência de requisitos.
- Para tarefas relacionadas ao Notion, consulte [docs/documentacao-notion.md](docs/documentacao-notion.md) e preserve o histórico ali descrito.
- Ao concluir cada tarefa de desenvolvimento, verifique as alterações e os testes realizados e atualize automaticamente a página existente do projeto no Notion: https://app.notion.com/p/41ad47b1463381358537f64cb3b044e4.
- Modifique apenas as seções pertinentes, registre a data e as mudanças no Diário de Desenvolvimento, preserve o histórico e confirme a atualização antes de declará-la concluída. Não crie páginas duplicadas.
- Se o Notion estiver indisponível, entregue o trabalho de código e informe a atualização documental pendente.
- Respeite uma instrução específica que proíba operações no Notion em determinada tarefa.
