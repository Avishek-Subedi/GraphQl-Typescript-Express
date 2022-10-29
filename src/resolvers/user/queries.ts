import UserModel from "../../models/user.model";
import User from "../../models/user.model";
import { getAllUsersValidationSchema } from "../../validations/user";
import { QueryResolvers } from "../../generated/resolvers";

const UserQueries: QueryResolvers = {
  getAllUsers: async (parent, args) => {
    try {
      const { page, limit } = args;
      await getAllUsersValidationSchema.validateAsync({ page, limit });
      const recordsToSkip = (page - 1) * limit;
      return User.find().skip(recordsToSkip).limit(limit);
    } catch (error) {
      throw error;
    }
  },
};

export default UserQueries;
