# Javascript App

<https://github.com/ARES-Internal-Software/interviews/tree/main/cloud/javascript-app>

## App information

- Nestjs REST App
- Node Version 18.x
- Port: 3000
- Environment variables:
  - DB_HOST (Datenbank Host MySql)
  - DB_PORT=3306 (Standard)
  - DB_USERNAME
  - DB_PASSWORD
  - DB_DATABASE (Datenbankname)
  - APP_PORT=3000 (Standard)

## Swagger integration

- /api 
  - more info <https://swagger.io/tools/swagger-ui/>
- /swagger-stats 
  - more info <https://swaggerstats.io>

## REST Endpoints

- [GET] / (Hello Screen)
- [GET] /users (show all users)
- [GET] /users/{id} (show user with id)
- [DELETE] /users/{id} (delete user with id)
- [POST] /users (create new user)
  - JSON with lastname (string), firstname (string), someinfo (string), isActive (boolean)

## Installation

```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## License

App is Provided as is, without warranty of any kind
Nest is [MIT licensed](LICENSE).
