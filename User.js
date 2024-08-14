class User {
    constructor(fullname, email, password) {
      this.fullname = fullname;
      this.email = email;
      this.password = password;
    }
  
    login (email, password) {
      if (this.email === email && this.password === password) {
        console.log(`${this.fullname}: Login success!`);
      } else {
        console.log(`${this.fullname}: Login failed!`);
      }
    }
  }
  
  const john = new User('John', 'john@email.com', '1234');
  john.login('john@email.com', '1234');

