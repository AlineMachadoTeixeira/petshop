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
