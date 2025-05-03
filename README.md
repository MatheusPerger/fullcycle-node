# Docker Node Desafio Fullcycle

Neste repositório se encontram detalhes para o desafio fullcycle Docker Node.

As premissas do desafio são:
- Teremos 3 containers, onde quando um usuário acessar localhost:8080 irá bater no nginx e ele irá direcionar para o app Node.js que por sua vez irá adicionar um registro no banco de dados mysql.
- O retorno deve ser **Full Cycle Rocks!!** seguido com os nomes do banco de dados

Link da imagem Node: https://hub.docker.com/repository/docker/matheusperger/fullcycle-node
Link da imagem Mysql: https://hub.docker.com/repository/docker/matheusperger/fullcycle-db/general
Link da imagem Nginx: https://hub.docker.com/repository/docker/matheusperger/fullcycle-nginx

Para executar o projeto, basta executar o comando:
> docker-compose up -d