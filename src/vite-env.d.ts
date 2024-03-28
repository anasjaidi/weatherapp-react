/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_APP_WEATHER_KEY: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }