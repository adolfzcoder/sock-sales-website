/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly REACT_APP_SUPABASE_URL: string;
    readonly REACT_APP_SUPABASE_KEY: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
