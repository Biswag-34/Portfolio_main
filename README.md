# Biswajit Goswami Portfolio

A Next.js portfolio for full-stack engineering and digital growth.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:4173](http://localhost:4173). To run the production build locally, use `npm run build` followed by `npm start`.

## Contact form configuration

Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in the project's local `.env.local` to enable Web3Forms:

```dotenv
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
```

Set the same variable in your production host's build environment before deploying. For the included GitHub Pages workflow, add it as a repository Actions variable. Web3Forms sends enquiries to the inbox linked to the key, and the visitor's email becomes the reply-to address.
