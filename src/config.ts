// Where the contact form posts to. Set these in a .env file (see .env.example)
// or in your host's environment variables (Netlify / Vercel / Cloudflare Pages).
export const FORM_ENDPOINT: string = import.meta.env.VITE_FORM_ENDPOINT ?? '';
// Only needed by some services (e.g. Web3Forms). Leave empty otherwise.
export const FORM_ACCESS_KEY: string = import.meta.env.VITE_FORM_ACCESS_KEY ?? '';
