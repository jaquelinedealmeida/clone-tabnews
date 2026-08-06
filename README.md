# Projeto de Estudo do curso.dev do Filipe Decchamps - clone-tabnews

Clone do projeto Tab news do Deschamps para o curso.dev. Feito em node.js

## Deploy

O deploy é feito no Vercel

## Página

https://news-tech-one.vercel.app/

## Tarefa

Criadas nas issues do GitHub

## Estilização e configurações do Editor

No perfil, configurar sincronização e entrar com a conta do Github para permitir sincronização com Vscode, inclusive com as extensões.
o arquivo .editorConfig pode ser usado para adcionar configurações específicas do editor e depois instalar a extensão do mesmo

### Pretier

Permite fazer formatações antes da instalação do .editorconfig.
instala somente com dependência de Dev:

```
npm install prettier --D
```

No package.json, adcionar script se o codigo esta com a formatação esperada

```
lint:check": "prettier --check
```

Corrige os arquivos

```
lint:fix": " prettier --write
```

## Comandos

Rodar aplicação

```
npm run dev
```

Instalar o gerenciador de versões do node

```
nvm install
```

Usar a versão do node indicda no .nvmrc

```
nvm use
```

Instalar jest para testes

```
npm install -save-dev jest@29.6.2
```

### Subir ambiente:

Banco de Dados Local:
Subir container

```
docker compose up -d
```

ou

```
docker compose --file compose.yaml up -d
```

Encerrar container

```
docker compose --file compose.yaml down
```

Listar todos os containers:

```
docker compose -a
```

Com a extensão `Docker container`é possível acompanhar todos os containers e imagens.

Verificar logs do container:

```
docker logs nome-do-container
```

### Instalando psql

Para atualização de pacote do linux:

```
sudo apt updte
```

Instalando psql client

```
sudo apt install postgresql-client
```

Acessar banco de dados via container

```
psql --host=localhost --username=user --port=5432
```
