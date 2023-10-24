# Portfolio

## Desccrição

- Esse é o backend do meu portfolio que é ligado a um banco de dados, onde eu posso adicionar, editar e deletar projetos que eu já fiz.

## Configurações

- O arquivo `.sequelizerc` é responsável por configurar o sequelize, onde você pode configurar o caminho para os arquivos de configuração, models, migrations e seeders.
- O arquivo `/src/database/config/database.ts` é onde é feito a conexão com o banco de dados, onde você pode configurar o nome do banco, usuário, senha, host e o dialeto do banco de dados, lembrando que o projeto é feito em mysql.
-

## Inicialização

- Para inicializar o projeto, basta rodar o comando `npm start` no terminal, mas antes deve ser feito o build do projeto com o comando `npm run build`.
- Para rodar configurações no banco de dados que você linkou, basta rodar o comando `npm run db:reset`.

## Rotas e Respostas esperadas se tudo der certo

- GET `/posts` - Retorna todos os projetos cadastrados no banco de dados.

```json
[
  {
    "id": 1,
    "projectImage": "mockImage.jpg",
    "projectDescription": "Descrição do projeto 1",
    "repositoryLink": "github.com/some-repository",
    "userId": 1,
    "isFavorite": true,
    "title": "Projeto 1",
    "mainLanguage": "JavaScript",
    "createdAt": "2021-08-02T00:00:00.000Z",
    "deployLink": "some-deploy-link.com"
  },
  {
    "id": 2,
    "projectImage": "mockImage2.jpg",
    "projectDescription": "Descrição do projeto 2",
    "repositoryLink": "github.com/some-repository2",
    "userId": 1,
    "isFavorite": false,
    "title": "Projeto 2",
    "mainLanguage": "TypeScript",
    "createdAt": "2022-08-02T00:00:00.000Z"
  }
]
```

- GET `/posts/1` - Retorna o projeto cadastrados no banco de dados com id 1.

```json
{
    "id": 1,
    "projectImage": "mockImage.jpg",
    "projectDescription": "Descrição do projeto 1",
    "repositoryLink": "github.com/some-repository",
    "userId": 1,
    "isFavorite": true,
    "title": "Projeto 1",
    "mainLanguage": "JavaScript",
    "createdAt": "2021-08-02T00:00:00.000Z",
    "deployLink": "some-deploy-link.com"
},

```

- POST `/user/login` - Retorna o token de autenticação do usuário.

```json
{
  "token": "some-token"
}
```

- GET `/favorites` - Retorna apenas projetos que sejam favoritos

```json
[
  {
    "id": 1,
    "projectImage": "mockImage.jpg",
    "projectDescription": "Descrição do projeto 1",
    "repositoryLink": "github.com/some-repository",
    "userId": 1,
    "isFavorite": true,
    "title": "Projeto 1",
    "mainLanguage": "JavaScript",
    "createdAt": "2021-08-02T00:00:00.000Z",
    "deployLink": "some-deploy-link.com"
  },
  {
    "id": 3,
    "projectImage": "mockImage3.jpg",
    "projectDescription": "Descrição do projeto 3",
    "repositoryLink": "github.com/some-repository3",
    "userId": 1,
    "isFavorite": true,
    "title": "Projeto 3",
    "mainLanguage": "TypeScript",
    "createdAt": "2022-08-02T00:00:00.000Z"
  }
]
```
