export default class Email {
  private _email;
  static emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  constructor(email: string) {
    if (!Email.emailRegex.test(email)) {
      throw new Error('email invalido')
    }
    this._email = email;
  }

  getEmail() {
    return this._email
  }
}