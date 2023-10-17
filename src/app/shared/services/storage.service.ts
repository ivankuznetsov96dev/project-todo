import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public setLocalStorageProp(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getLocalStorageProp(key: string): string | null {
    return localStorage.getItem(key);
  }
}
