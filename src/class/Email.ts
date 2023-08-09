import validator from 'validator';

export default class Email {
  private _email;
  constructor(email: string) {
    if (!validator.isEmail(email)) {
      throw new Error('email invalido')
    }
    this._email = email;
  }

  getEmail() {
    return this._email
  }
}