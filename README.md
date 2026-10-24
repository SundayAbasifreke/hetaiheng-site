# Hetaiheng landing page (standalone)

React + Vite + Tailwind. No backend, no Bolt, no Supabase.

## Run locally
    npm install
    npm run dev          # http://localhost:5173

## Build for hosting
    npm run build        # output in dist/

Host the repo on Netlify, Vercel or Cloudflare Pages: build command `npm run build`, output folder `dist`.

## Connect the contact form
1. Create a form with any service (Formspree, FormSubmit, Web3Forms, Getform...).
2. Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` (and `VITE_FORM_ACCESS_KEY` if the service needs one).
   On your host, add the same variables in its Environment Variables settings, then redeploy.
3. The form sends JSON: name, email, phone, country, condition, message.

Content (text, phone, email, images) lives in `src/data/content.ts`.
