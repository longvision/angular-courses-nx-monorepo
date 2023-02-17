import { InjectionToken } from "@angular/core";
import { AppConfig } from './config.interface'
import { environment } from '../environments/enviroment.dev'

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
  apiEndpoint: environment.apiEndpoint
}
