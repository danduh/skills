export class User {
  firstName: string;
  lastName: string;
  password: string;
  email: string;

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
