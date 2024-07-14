# Projeto da trilha de férias 
# Versão: JavaScript
O projeto será produzir um software que servirá para organizar os squads que serão chamados para o RISE UP  e para o GROW UP.
**Requisitos do software:**
1. CRUD do mentor
2. CRUD das empresas
3. CRUD dos squads
5. Alocação dos mentores
    5.1 (bônus) Utilzar Websocket
    5.2 Bloquear conflitos de mentores (evitar que turmas tenham dois mentores)
    5.3 Bloquear conflitos de horários.


## 1. Backend
1. (feito) Criação do modelo relacional do banco de dados
    1.1 (BRmodelo) https://app.brmodeloweb.com/#!/conceptual/668c641efd5937970fc931a1

    **NOTA: Evitar muitas operações no banco de dados**

2. Por conta da natureza do curso, o tempo para o desenvolvimento da aplicação é curto. Por isso eu vou utilizar as frameworks com que estou mais familiarizado para fazer a produção o mais rapido possivel. Os seguintes frameworks serão utilizado e eu demonstrarei como fazer a instalação dos mesmos através do NPM: **Express**, **Knex**, **CORS**, **MYSQL** e **Angular**.

3. INSTALANDO:

    3.1 CHEATSHEET

        `
        ionic start NGPDManager tabs //vai criar um projeto no modelo tabs do Ionic
        cd NGPDManager
        npm i express knex mysql cors dotenv uuid 
        npm i @types/cors @types/knex @types/express @types/uuid ts-node-dev --save-dev

        
        
        
        `







### Fontes 
- [ Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)..