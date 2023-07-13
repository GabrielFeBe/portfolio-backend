import Email from "./Email";
import Password from "./Password";

export default class User {
  private _email: Email;
  private _password: Password;
  constructor(email: Email, password: Password) {
    this._email = email;
    this._password = password;

  }
  getUser() {
    return {
      email: this._email,
      password: this._password
    }
  }

}