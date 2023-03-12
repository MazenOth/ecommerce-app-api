// const UsersDatabase = require("../Model/Repos/UsersDatabase");
// const usersDatabase = new UsersDatabase();
const {
  ApplicationUser,
  validate,
} = require("../Model/Entities/ApplicationUser");

module.exports = class UsersAuthService {
  #currentUserIndex;

  async signIn(body, email, password) {

    const { error } = validate(body);
    if (error) {
      return "Validation error";
    }

    const user = await ApplicationUser.find().and([
      { email: email },
      { password: password },
    ]);
    if (user.length === 0) {
      return "Wrong password or email";
    } else {
      return user;
    }
  }

  async signUp(email, password, role, balance = 0) {
    let user = new ApplicationUser({
      email: email,
      password: password,
      role: role,
      balance: balance,
    });

    user = await user.save();

    return "user signed up";
  }

  showNewUser() {
    usersDatabase.addNewUser();
    console.log(
      `You've Successfuly Signed Up and this is your new user below:`
    );
    console.log(usersDatabase.getNewUser);
  }
};
