declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_FIREBASE_API_KEY: string;
    REACT_APP_FIREBASE_ID: string;
    REACT_APP_FIREBASE_SENDER_ID: string;
    REACT_APP_FIREBASE_APP_ID: string;
    REACT_APP_FIREBASE_MEASUREMENT_ID: string;
  }
}