# Contribuindo para Lucas

Obrigado por considerar contribuir para o projeto Lucas! Todas as contribuições são bem-vindas.

## Como Contribuir

### Reportando Bugs

Antes de criar um relatório de bug, verifique se o problema já foi reportado. Se você encontrou um bug, abra uma nova issue com:

- **Título descritivo**
- **Descrição clara do problema**
- **Passos para reproduzir**
- **Comportamento esperado vs atual**
- **Screenshots/logs se aplicável**
- **Seu ambiente** (SO, versão do Node, etc)

### Sugerindo Melhorias

Melhorias são sempre bem-vindas! Para sugerir uma melhoria:

1. Use um **título descritivo**
2. Forneça uma **descrição detalhada da melhoria sugerida**
3. Explique **por que essa melhoria seria útil**
4. Liste **exemplos de como seria utilizada**

### Pull Requests

- Siga o [style guide](#style-guide) do projeto
- Use commits descritivos com prefixos convencionais
- Inclua testes para novas funcionalidades
- Atualize a documentação se necessário
- Uma vez que o PR está pronto, ele será revisado

## Style Guide

### Commits

Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[escopo opcional]: <descrição>

<corpo opcional>
<rodapé opcional>
```

Tipos:
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação
- `refactor:` - Refatoração
- `perf:` - Melhoria de performance
- `test:` - Testes
- `chore:` - Manutenção

Exemplos:
```
feat(auth): adicionar suporte a autenticação OAuth
fix(api): corrigir erro de timeout em requisições
docs: atualizar guia de instalação
```

### Código

- Use TypeScript
- Siga o padrão do projeto
- Execute `npm run lint` antes de commitar
- Execute `npm run test` para garantir que os testes passam
- Use variáveis descritivas
- Adicione comentários para código complexo

### Branches

- Use nomes descritivos: `feature/novo-componente`, `fix/bug-critico`
- Baseie em `main` para features novas
- Baseie em `develop` para hotfixes

## Setup de Desenvolvimento

```bash
# Clone o repositório
git clone https://github.com/lucas00923/lucas.git
cd lucas

# Instale as dependências
npm install

# Crie uma branch
git checkout -b feature/sua-feature

# Faça suas mudanças e teste
npm run test
npm run lint

# Commit com mensagem descritiva
git commit -m "feat: descrição da feature"

# Push para seu fork
git push origin feature/sua-feature

# Abra um Pull Request
```

## Processo de Review

Quando você abrir um PR:

1. Um mantenedor vai revisar seu código
2. Mudanças podem ser solicitadas
3. Testes devem passar
4. Coverage não deve diminuir
5. Uma vez aprovado, será feito merge

## Dúvidas?

Abra uma [issue](https://github.com/lucas00923/lucas/issues) ou contate @lucas00923

---

**Obrigado por contribuir! 🎉**
