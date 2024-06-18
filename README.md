# Atlantis

> Aluna: Mariana Izumi - 3DSM

Nesta lista foi implementado os seguintes requisitos:
- Implementar todas as classes diretoras responsáveis por criar cada tipo de
acomodação.
- Implementar as estruturas de dados e a lógica necessária para controlar a hospedagem,
ou seja, poder registar hospedes e vincula-los a algum tipo de acomodação.

## Organização
Segue abaixo a estrutura deste projeto ordenado por ordem das pastas:
- **atvii-atlantis**: Pasta principal que armazena todo o projeto
    - **src**: todos os arquivos sources úteis para o funcionamento do projeto
        -  **ts**: todos os arquivos em typescript
            - **abstracoes**: variáveis para o funcionamento da aplicação enquanto está rodando
            - **app**: arquivo principal para rodar o projeto
            - **construtores**: contrutores para classes
            - **diretores**: classes diretoras das acomodações
            - **dominio**: banco de dados temporário
            - **enumeracoes**: listagem de tipagens
            - **impressores**: todos os impressores
            - **interfaces**: interfaces necessárias para construção (impressor, menu, protótipo)
            - **io**: entradas e saídas do prompt
            - **menus**: diferentes prompts de menus
            - **modelos**: classes das entidades
            - **processos**: classes com os processos da aplicação e também switch case principal com opções de ações

## Como rodar o projeto
> 🚨 Pré-requisitos de downloads:
> - [Node.js]("https://nodejs.org/en/download/package-manager/current")
> - pacote node de typescript: ```npm install -g typescript```

Após clonar o repositório, segui as seguintes intruções:
1. No seu console de preferência se dirija ao seguinte diretório: \tecnicas-programacaoII\atvii-atlantis
    - ```cd .\atvii-atlantis\```
1. Instale todas as dependências prescritas no package.json
    - ```npm i```
1. Compile os arquivos typescript (.ts) para javascript (.js)
    - ```npx tsc```
1. Rode a aplicação: ```node .\src\js\app\app.js```