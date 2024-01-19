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
- Após instalar o `styled-components`, ative o suporte à compilação dele pelo Next.js `next.config.js` se não dar erro no CSS
- siga os passo a passo a baixo para não dar o erro:
- 1° --> Vai no arquivo next.config.js
- 2° --> digite isso:
  compiler: {
  styledComponents: true,
  } logo abaixo do reactStrictMode: true,

import {usePa} from "next/navagati"

const pathaname = usePathname
