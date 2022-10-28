import UserModel from "../../models/user.model";
import User from "../../models/user.model";

const UserQueries = {
  getAllUsers: async () => {
    return User.find();
  },
};

export default UserQueries;
