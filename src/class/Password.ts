export default class Password {
  private _password;
  constructor(password: string) {
    if (password.length < 6 || typeof password !== 'string') throw new Error('invalid password')
    this._password = password
  }
  getPassword() {
    return this._password;
  }
}