# Gerenciador de Preços

O Gerenciador de Preços é uma aplicação web que facilita a atualização e gerenciamento de preços de produtos. Com este aplicativo, você pode fazer o upload de arquivos CSV contendo novos preços e atualizar os registros de produtos no banco de dados de forma eficiente.

## Funcionalidades

- **Upload de Arquivos CSV**: Faça o upload de arquivos CSV que contenham informações sobre produtos e seus novos preços.

- **Atualização de Preços em Lote**: O aplicativo processa o arquivo CSV e atualiza os preços dos produtos em lote, economizando tempo e reduzindo erros manuais.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em seu sistema:

- Docker: [Instalação do Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Instalação do Docker Compose](https://docs.docker.com/compose/install/)

## Instalando a aplicação

### 1. Cria um novo diretório chamado **price-manager**
  ```bash
mkdir price-manager
``````
### 2. Dentro do diretório **price-manager** execute o seguinte comando:

  ```bash
touch docker-compose.yml
``````

### 3. Abra o arquivo e cole o seguinte código dentro:

  ```docker
version: '3'

services:
  frontend:
    container_name: price-manager-front-end
    build: ./price-manager-front-end
    # tty: true
    # stdin_open: true
    # command: bash
    ports:
      - "3000:3000"
    working_dir: /price-manager-front-end
    volumes: 
      - ./price-manager-front-end:/price-manager-front-end
    networks:
      - price-manager-net
    depends_on:
      - backend
      
  backend:
    container_name: price-manager-back-end
    build: ./price-manager-back-end
    # # tty ativa a flag -t
    # tty: true
    # # stdin_open ativa a flag -i
    # stdin_open: true
    # command: bash
    ports:
      - "3001:3001"
      - "5555:5555"
    working_dir: /price-manager-back-end
    volumes:
      - ./price-manager-back-end:/price-manager-back-end
    depends_on:
      - db
    networks:
      - price-manager-net
    environment:
      - "mysql://root:password@db:3306/price_manager_db"
  
  db:
    container_name: home-db
    image: mysql:8.1.0
    environment:
      - MYSQL_ROOT_PASSWORD=pass
    ports:
      - "3306:3306"
    networks:
      - price-manager-net
    # volumes:
    #   - ./home-app-backend/db:/db
  
networks:
  price-manager-net:
    driver: bridge
```
### 4. Agora clone o reporitório do **front-end**:

```bash
git clone git@github.com:victormatia/price-manager-front-end.git
```

### 5. Em seguida clone o reporitório do **backend-end**:

```bash
git clone git@github.com:victormatia/price-manager-back-end.git
```

### 6. Com ambos os serviços instalados, abra o terminal , dentro do diretório **price-manager** e execute o comando a seguir:

```bash
docker compose up -d
```