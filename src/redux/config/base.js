import dotenv from "dotenv";

export const ENVIRONMENT = process.env.NODE_ENV;

switch (ENVIRONMENT) {
        case 'production': {
                dotenv.config({ path: ".env" });
        }
        case 'development': {
                dotenv.config({ path: ".env.development" });
        }
        default: {
                dotenv.config({ path: ".env.local" });
        }
}

export const API_KEY = process.env['REACT_APP_API_KEY'];
