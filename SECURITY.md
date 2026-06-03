# Segurança

## Política de Segurança

Levamos a segurança muito a sério. Se você descobrir uma vulnerabilidade, **não** abra uma issue pública.

### Reportando Vulnerabilidades

Por favor, envie um email para o mantenedor do projeto em vez de usar o issue tracker público.

Incluir:
- Descrição da vulnerabilidade
- Passos para reproduzir (se aplicável)
- Versão afetada(s)
- Possível impacto

### Resposta

Você deve esperar:
- Uma resposta inicial em 48 horas
- Confirmação e timeline de correção
- Crédito público (se desejar) quando a vulnerabilidade for divulgada

## Práticas de Segurança

Este projeto segue as seguintes práticas:

- ✅ Dependências atualizadas regularmente
- ✅ Testes de segurança automatizados
- ✅ Code review antes de merge
- ✅ Variáveis sensíveis em arquivo `.env`
- ✅ Validação de entrada
- ✅ Proteção contra XSS
- ✅ CORS configurado corretamente

## Dependências

Verificamos regularmente por vulnerabilidades usando:
- `npm audit`
- Dependabot do GitHub
- Snyk

## Práticas para Desenvolvimento Seguro

### Nunca faça commit de:
- Senhas, tokens ou chaves API
- Dados sensíveis ou pessoais
- Arquivos de configuração com credenciais

### Use:
- Variáveis de ambiente para dados sensíveis
- Autenticação adequada para APIs
- HTTPS para comunicação
- Input validation e sanitization

## Divulgação Responsável

Apoiamos a [divulgação responsável](https://en.wikipedia.org/wiki/Responsible_disclosure) de vulnerabilidades.

---

**Obrigado por ajudar a manter o projeto seguro! 🔒**
