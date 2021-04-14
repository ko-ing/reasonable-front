import { prod } from "./config-prod";
import { dev } from './config-dev';
import { local } from './config-local';
import configInterface from "./configInterface";

export const config: configInterface = local;
// export const config: configInterface = (process.env.CONFIG == 'prod') ? prod : (process.env.CONFIG == 'dev') ? dev : local;