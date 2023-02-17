import { InjectionToken } from "@angular/core";


// this is a factory function that returns the localStorage object
// providedIn means that this token will be available in the root injector, as a singleton.
// no other instance of this token will be created in the application.
export const LocalStorageToken = new InjectionToken<Storage>('localStorage', {
  providedIn: 'root',
  factory: () => localStorage
});
