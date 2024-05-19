export class LocalStore {
  constructor(private key: string) {
    this.key = key;
  }

  get = <T>() => {
    return localStorage.getItem(this.key) as T;
  }

  set = (value: string) => {
    localStorage.setItem(this.key, value);
  }

  clear = () => {
    localStorage.removeItem(this.key);
  }
}