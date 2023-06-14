# Gerenciador de produtos


# Modules

## Users (admin)

[?] Cadastrar client
[?] Deletar client
[?] Listar Clients
[?] Atualizar client


## Products

[?] Cadastrar product
[?] Deletar product
[?] Listar product
[?] Atualizar product
[?] Buscar por produto


## Auth

[?] Autenticar usuarios com login
[?] Cadastro de Permissoes
[?] Cadastro de Roles
[?] Conexao User_roles
[?] Conexao Permission_Roles



## Migrations

Sao as estrutura de controle para manipular o banco via algum ORM, ou via comando de SQL, voce pode criar, inserir dados e etc.

**CLI generate file**

npm run typeorm migration:create -n server/database/typeorm/migrations/${filename}

**CLI create table**
npm run typeorm migration:run

 npm run typeorm -- -d server/database/typeorm/data-source.typeorm.ts migration:run


## guide

https://www.youtube.com/watch?v=TGCwB9oMR0o&t=473s