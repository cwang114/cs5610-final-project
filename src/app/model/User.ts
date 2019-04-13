export class User {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;


  constructor(email: string, password: string, firstName: string, lastName: string, role: string) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
  }
}
