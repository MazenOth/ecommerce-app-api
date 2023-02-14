const UsersDatabase = require("../Model/Repos/UsersDatabase");
const usersDatabase = new UsersDatabase();

module.exports = class UsersAuthService {
  #currentUserIndex;

  signIn(email, password) {
    for (let i = 0; i < usersDatabase.getUsers.length; i++) {
      if (
        usersDatabase.getUsers[i].getEmail == email &&
        usersDatabase.getUsers[i].getPassword == password
      ) {
        return "Signed in succssfully!";
      } else {
        return "Please check your email or password!";
      }
    }
  }

  signUp(email, password, role, balance = 0) {
    usersDatabase.getNewUser.setEmail = email;
    usersDatabase.getNewUser.setPassword = password;
    usersDatabase.getNewUser.setRole = role;
    usersDatabase.getNewUser.setBalance = balance;
    usersDatabase.addNewUser;
    return `Your email: ${usersDatabase.getNewUser.getEmail}, password: ${usersDatabase.getNewUser.getPassword}, your balance: ${usersDatabase.getNewUser.getBalance}`;
  }

  showNewUser() {
    usersDatabase.addNewUser();
    console.log(
      `You've Successfuly Signed Up and this is your new user below:`
    );
    console.log(usersDatabase.getNewUser);
  }
};
