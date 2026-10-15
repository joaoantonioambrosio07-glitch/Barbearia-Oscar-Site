<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/46cfbfe4-0225-43b5-a15b-eecbc264e9d2

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Correção das imagens para deploy na Vercel

As imagens locais foram colocadas em `public/images/` e as referências no código foram atualizadas para URLs estáveis do tipo `/images/nome-do-ficheiro.jpg`, compatíveis com o build do Vite e o deploy na Vercel.

Para publicar:
1. Extraia este ZIP.
2. Envie o conteúdo do projeto para o mesmo repositório GitHub ligado à Vercel (substituindo os ficheiros antigos).
3. Confirme que a Vercel usa `npm run build` como comando de build e `dist` como diretório de saída.
4. Faça um novo deploy e teste o site publicado.
