# recruiting-laon

## Dependências

- [Composer](https://getcomposer.org/download/)
- [Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js >= 18.18](https://nodejs.org/pt/download)

## Rodando o projeto

- Crie o arquivo **.env** nas pastas _recruiting-laon-backend_ e _recruiting-laon-frontend_, usando como base os arquivos **example.env** disponíveis;

- Abra o terminal na pasta raíz do projeto e copie os comandos abaixo:

```
    composer global require laravel/installer
    cd recruiting-laon-backend
    composer install
    ./vendor/bin/sail up -d
    ./vendor/bin/sail artisan migrate
    ./vendor/bin/sail artisan db:seed

    cd ../recruiting-laon-frontend
    npm i
    npm run dev

```
