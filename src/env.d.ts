/// <reference types="astro/client" />

export {};
declare global { 
  interface ImportMetaEnv {
    readonly PUBLIC_NODE_ENV: string
    readonly PUBLIC_POKEAPI: string;
    readonly PUBLIC_WEB: string;
    // more env variables...
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
