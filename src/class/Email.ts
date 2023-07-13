export default class Email {
  private _email;
  static emailRegex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
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