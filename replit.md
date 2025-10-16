# API Comedian - Microsserviço de Piadas

## Visão Geral
Microsserviço backend educacional que serve piadas aleatórias através de endpoints REST em JSON. Projeto focado em aprendizado de desenvolvimento backend, APIs REST, e manipulação de dados em memória.

## Objetivos do Projeto
- Compreender configuração de ambiente backend
- Criar rotas (endpoints) e manipular requisições HTTP
- Trabalhar com dados em memória (arrays/listas)
- Retornar dados estruturados em formato JSON
- Desenvolver habilidades de resolução de problemas e autogestão

## Estrutura da Aplicação

### Backend (Node.js + Express)
- **Endpoints principais:**
  - `GET /api/piada` - Retorna uma piada aleatória de qualquer categoria
  - `GET /api/piadas/:categoria` - Retorna uma piada aleatória da categoria especificada (TI, Animais, Geral)
  - `GET /api/categorias` - Lista todas as categorias disponíveis com contagem

- **Storage:** 
  - Armazenamento em memória (MemStorage)
  - Mínimo de 10 piadas em português
  - Categorias: TI, Animais, Geral

### Frontend (React + TypeScript)
Interface simples para testar e documentar a API:
- Seletor de categorias
- Visualização de piadas com formatação
- Preview de resposta JSON
- Documentação interativa dos endpoints
- Exemplos de uso com cURL

### Schema de Dados
```typescript
type Piada = {
  id: string;
  texto: string;
  categoria: string;
};

type PiadaResponse = {
  piada: string;
  categoria?: string;
};
```

## Tecnologias
- **Backend:** Node.js, Express, TypeScript
- **Frontend:** React, TanStack Query, Wouter, Shadcn UI
- **Armazenamento:** Memória (in-memory storage)
- **Estilo:** Tailwind CSS

## Gamificação
- 🎤 Badge desbloqueado: **API Comedian**
- ⭐ XP ganho: **80 pontos** (MVP) + **10 pontos** (desafio bônus de categorias)

## Última Atualização
- Data: 15/10/2025
- Status: ✅ CONCLUÍDO - MVP completo e testado com sucesso

## Funcionalidades Implementadas
✅ 14 piadas em português (5 TI, 4 Animais, 5 Geral)  
✅ Endpoint GET /api/piada - piada aleatória  
✅ Endpoint GET /api/piadas/:categoria - piada por categoria  
✅ Endpoint GET /api/categorias - lista categorias  
✅ Interface web interativa para testar a API  
✅ Documentação completa dos endpoints  
✅ Tratamento robusto de erros com cache  
✅ Estados de loading e recuperação  
✅ Testes E2E completos aprovados
