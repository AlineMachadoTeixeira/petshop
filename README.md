n dev

- `npm run dev`
- `npm run dev -- --host 0.0.0.0 --open` Entrar direto e abre o navegador já com a pagina
  Local: http://localhost:5173/ (computador) ➜ Network: http://10.20.46.47:5173/(celular)
- cls --> limpar pasta
- dir --> para achar pasta
- cd --> acha arquivo um por um
- node espaço +nome da pasta --> ver o resultado que está na pasta com console.log
- cd.. --> volta algumas pastas ou uma pasta
- ctrl +C --> para parar o CMD ou qualquer
- atalho windows mais .(ponto) trás opções de Ícones/emojis
- no NODEJS `npm run api`

# PetShop: projeto Next.js

## Recursos utilizados

- Next.js
- API Fake/local
- API via Firebase Realtime Database
- Componentes
- Rotas
- Map, Filter
- Manipulação de Formulário
- Publicação na Vercel e na Netlify

### Importante

#### Como fazer a instalação do `styled-components` para usar o CSS sem ser o global

- Para aplicar o styled-components primeiro pare o terminal com ctrl C e digite o de baixo e dar entre
- digite no terminal `npm install styled-components`
- verifica ser apareceu o arquivo package.json
- depois fazer o npm run dev para voltar o arquivo que foi parado
- Após instalar o `styled-components`, ative o suporte à compilação dele pelo Next.js `next.config.js` - Se não fazer isso dar erro no CSS
- Siga os passos a passos a baixo para não dar o erro:
- 1° --> Vai no arquivo next.config.js
- 2° --> digite isso:
  compiler: {
  styledComponents: true,
  } logo abaixo do reactStrictMode: true,

#### Instalando Json Server server para simular uma API

- Primeiro pare o terminar depois
- digite no terminal `npm install -g json-server`
- para ter certeza que instalou abra node.js command prompt e digite `json-server --version` é para aparecer 1.0.0-alpha.21
- depois jogamos a pasta db.json na raiz do visual . A pasta db.json o professor passou pronta.

## Branch 11-usando-json-server-como-fake-api

### Etapas (faça tudo usando o Node.js Command Prompt)

1. Instalação global do `json-server`: `npm install -g json-server`
2. Colocação do arquivo `db.json` na raíz do projeto (este arquivo funcionará como um banco de dados para a API)
3. Pegar o IP da máquina usando `ipconfig`
4. Adicionar um script npm no `package.json` com a seguinte configuração:

`"api" : "json-server --host IP.DA.SUA.MAQUINA db.json --port NÚMERO"`

---

- para instalar o json-server:

```cmd
<!-- para instalar globalmente para projetos futuros a versão deste projeto 1.0.0 alpha.21 -->
npm install -g json-server
```

- para executar recomendado o node:

```cmd
json-server --watch nomeDoArquivoDesejado <!-- neste caso db.json -->
```

- para desconfigurar da porta padrão:

```cmd
<!-- use o ipconfig -->
json-server --host ipDaMaquina nomeDoArquivoDesejado  --port numeroDaPorta
```

para facilitar a vida no package.json e crie um script novo e coloque o a linha de comando acima

```json
"scripts": {
    "api": "json-server --host ipDaMaquina nomeDoArquivoDesejado  --port numeroDaPorta"
  }
```

#### Abri cmd pelo NODE.js

cd espaço botão direito vai na pasta que você quer abrir com o botão direito Copiar endereço como texto
vai no terminal node.js
coloca cd e aperte botão direito do mouse

digite json-server --watch db.json

para saber se o node está instalado json-server --version tem que aparecer 1.0.0-alpha.21

- ipconfig -- para descobrir o numero IP do seu computador

json-server --host 10.20.46.34 db.json --port 2112

http://10.20.46.34:2112/posts

depois que mudar a pasta package.json na parte de scripts na ultima linha digite "api": "json-server --host 10.20.46.34 db.json --port 2112" depois no terminal digite no terminal do node `npm run api`

Quando já fez o passo a passo de cima e só quer abrir o arquivo digite no node.js na pasta que quer abrir `npm run api` e no terminal normal digite `npm run dev`

### Ducumentação oficial sobre SSR

https://nextjs.org/docs/pages/building-your-application/data-fetching

`getStaticProps`: executada no lado do servidor (SSR - Server Side Rendering), portanto logs, erros, lógica, ação/comandos NÃO aparecem para o usuário (mas aparecem no terminal para o programador(a)).

Na maioria dos casos usaremos `getStaticProps` para este tipo de processamento em que os dados são consumidos (Data Fetching) através da uma API, que já que esta função tem uma perfomance melhor para fazer o processamento apenas no momento da requisição.

Também há a função `getServerSideProps` que pode ser útil para páginas cujos dados mudam frequentemente ou são diferentes para cada usuário (como no caso de uso de dados de geolocalização).

##### Site

`https://unminify.com/#google_vignette` ele arruma o código fonte da página.
`https://pagespeed.web.dev/` ele você ver o desempenho do site que criou

## Branch 14

### Recursos necessários

- Pages/Rotas **dinâmicas** utilizado subpasta (posts) e arquivo nomeado com colchetes indicando o nome(s) do(s) parâmetros. No caso, foi criado o `[id].jsx`

- `getStaticProps`: necessário para carregar os dados da API de acordo com o parâmetro (usando a prop `{params}`) e gerar o HTML via SSR

- `getStaticPaths`: necessário para gerar os caminhos dinâmicos no momento do acesso à página.
