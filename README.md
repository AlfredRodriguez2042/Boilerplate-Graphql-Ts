## Boilerplate

it is a CRUD project with Graphql TypeORM and Apollo-Server

### Getting Started

#### Prerequisites

- Docker

```sh
sudo apt install docker-compose
```

- Node v13.11

```sh
node --version
```

- npm

```sh
npm install npm@latest -g
```

#### installation

1. clone the repo
2. install NPM packages

```sh
npm install
```

3. create a file .env

```sh
POSTGRES_PASSWORD=
POSTGRES_USER=
POSTGRES_DB=
JWT_SECRET=
```

2. Run Docker

```sh
docker-compose up -d
```

4. open http://localhost:4000/graphql
