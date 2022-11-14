# Gerenciador de usuários

## Descrição da aplicação

Nesse projeto foi desenvolvido um serviço de back-end responsável por gerenciar um CRUD de usuário utilizando TypeORM.

## Tecnologias utilizadas: 

- NodeJS
- ExpressJS
- typeORM
- Typescript
- Jest
- sqlite3
- bcrypt
- jsonwebtoken
- supertest
- class-transformer
- express-async-errors
- pg

### Para inicializar a aplicação:

````
yarn dev
````

## Endpoints do serviço:

<table>
    <thead>
        <tr>
            <th>Método</th>
            <th>Endpoint</th>
            <th>Responsabilidade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/users</td>
            <td>Criação de usuário</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/users</td>
            <td>Lista todos os usuários</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>/users</td>
            <td>Atualiza um usuário</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/users/:id</td>
            <td>Realiza um soft delete no usuário</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/login</td>
            <td>Gera o token de autenticação</td>
        </tr>
    </tbody>
</table>
