# Desafio 1 OneBitCode

## Automação de marcação de aulas concluidas
Solução para o desafio da [OneBitCode](https://comunidade.onebitcode.com/feed), que durante a troca de plataforma foi perdido o progresso de aulas concluidas dos alunos. Esse script foi criado com a ideia de automatizar esse processo de atualização do progresso de aulas concluidas na nova plataforma.

### Pre-requisitos
- [NodeJS](https://nodejs.org/en/)

## Como Executar

- [Faça o download da pasta](https://github.com/viniciuschavier/Desafio1OneBitCode/archive/refs/heads/master.zip)
- Extraia o arquivo
- Acesse a pasta que foi extraida pelo terminal
- Execute no terminal
  ```
  npm init -y
  npm install puppeteer readline-sync
  node index.js
  ```
- Depois de executar, insira as informações que serão pedidas pelo terminal (url da aula que deseja iniciar a marcação, quantidade de aulas a ser marcadas a partir dessa url informada, email, senha)