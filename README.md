# Backend Email Service

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

## Serviço de Disparo de Emails
O objetivo principal é demonstrar o uso do banco de dados NoSQL Redis como message broker em um sistema de disparo de e-mails em lote.


## Tecnologias Utilizadas

- [Redis](https://redis.io/) - Banco de dados NoSQL para armazenar as mensagens em filas
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript do lado do servidor
  - [Bull](https://github.com/OptimalBits/bull) - Biblioteca para manipulação de filas de mensagens utilizando Redis
  - [AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#constructor-property) - SDK da AWS para envio de e-mails utilizando o serviço Simple Email Service (SES)

## Como Executar

1. Clone o repositório e acesse a pasta do projeto
   ```shell
   git clone https://github.com/Valerianofilipec/backend_email_service.git
   cd nome-do-repositorio
    ```
2. Instale os pacotes utilizando o comando `npm install`
3. Crie um arquivo `.env` na raiz do projeto e insira suas credencias. Utilize o arquivo `.env.example` como base.
4. Execute o projeto com o comando `npm start`
