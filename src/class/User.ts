import Email from "./Email";
import Password from "./Password";

export default class User {
  private _email: Email;
  private _password: Password;
  constructor(email: string, password: string) {
    this._email = new Email(email);
    this._password = new Password(password);

  }
  getUser() {
    return {
      email: this._email.getEmail(),
      password: this._password.getPassword()
    }
  }

}