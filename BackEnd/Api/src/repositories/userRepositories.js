import User from "../Models/userModel.js";

class UserRepository {
  async findByEmail(email) {
    return User.findOne({ email });
  }

  async save(user) {
    const newUser = new User(user);
    return newUser.save();
  }
}

export default new UserRepository();