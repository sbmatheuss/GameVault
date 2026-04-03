# GameVault API - Atualizações de Cart

## Contexto
Esse README documenta as alterações realizadas na API de carrinho (`cart`) dentro do projeto `game-vault-api`.

## Alterações feitas

1. Adicionado método `findAll` no `CartService`
   - Arquivo: `src/modules/carts/cart.service.ts`
   - Método criado:
     - `async findAll(): Promise<Cart[]>` que chama `this.cartRepository.findAll()`.

2. Corrigido modelo de entrada (`InsertCart`) para não exigir `id`
   - Arquivo: `src/modules/carts/dtos/cart.dtos.types.ts`
   - Anterior: `InsertCart = InferInsertModel<typeof cart>` (incluía `id`)
   - Atual: `InsertCart = Omit<InferInsertModel<typeof cart>, "id">` (id gerado internamente)

3. Ajustes de tipagem de rota no `CartController`
   - Arquivo: `src/modules/carts/cart.controller.ts`
   - `req.params` agora tipado como `{ id: string }` nas funções:
     - `findById`
     - `update`
     - `delete`
   - Evita erro `string | string[]` para `id`.

4. Roteador `cartRouter` implementado e adicionado no `routes.ts`
   - Arquivo criado atualizados:
     - `src/modules/carts/cart.router.ts`
     - `src/routes.ts`
   - `routes.ts` agora faz `router.use(cartRouter)` para habilitar `/cart`.

5. Ajuste em `package.json`
   - Removido dependência inválida `"-": "^0.0.1"`.

## Resultado
- O projeto compila com `npx tsc --noEmit` sem erros.
- O endpoint `/cart` está integrado à aplicação.
- Criação de carrinho funciona com payload `{ name }` e ID gerado pelo repositório.

## Como testar

1. Instalar dependências:
   ```bash
   cd game-vault-api
   npm install
   ```

2. Rodar verificações TS:
   ```bash
   npx tsc --noEmit
   ```

3. Rodar em dev (com `.env` válido):
   ```bash
   npm run start:dev
   ```

4. Exemplo de request para criar carrinho:
   ```bash
   curl -X POST http://localhost:3000/cart -H "Content-Type: application/json" -d '{"name":"Meu Carrinho"}'
   ```

## Observações
- `CartRepository` continua gerando `id` com `crypto.randomUUID()` em `create`.
- Recomendado aplicar a mesma abordagem em outros módulos (usuários/favoritos) caso ainda não estejam como `Omit<..., "id">`.
