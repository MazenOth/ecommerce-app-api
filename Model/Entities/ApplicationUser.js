module.exports = class ApplicationUser {
  #email;
  #password;
  #role;
  #balance;

  constructor(email, password, role, balance = 0) {
    this.#email = email;
    this.#password = password;
    this.#role = role;
    this.#balance = balance;
  }

  get getEmail() {
    return this.#email;
  }

  set setEmail(newEmail) {
    if (newEmail === "") {
      throw new Error("You cannot enter empty email!");
    }
    this.#email = newEmail;
  }

  get getPassword() {
    return this.#password;
  }

  set setPassword(newPassword) {
    if (newPassword.toString().length < 4) {
      throw new Error(
        "You cannot enter password less than 4 charachters or numbers!"
      );
    }
    this.#password = newPassword;
  }

  get getRole() {
    return this.#role;
  }
  set setRole(role) {
    this.#role = role;
  }

  get getBalance() {
    return this.#balance;
  }
  set setBalance(balance) {
    if (balance < 0) {
      throw new Error("Please enter a valid amount of balance!");
    }
    this.#balance = balance;
  }
};
