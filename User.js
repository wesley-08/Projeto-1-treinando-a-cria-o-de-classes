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
  
  const user = new User('John Doe', 'john@email.com', 'securePassword');
  user.login('john@email.com', 'securePassword');
  user.login('john@email.com', 'wrongPassword'); 
