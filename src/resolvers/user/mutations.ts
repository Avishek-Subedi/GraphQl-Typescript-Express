import User from "../../models/user.model";
import { createUserValidationSchema } from "../../validations/user";
import { MutationResolvers } from "../../generated/resolvers";

const UserMutations: MutationResolvers = {
  createUser: async (parent, args, context) => {
    const {
      name,
      address,
      phone,
      gender,
      email,
      nationality,
      dateOfBirth,
      educationBackground,
      preferedContactMethod,
    } = args.user;

    try {
      await createUserValidationSchema.validateAsync(args.user);
      const user = new User({
        name,
        address,
        phone,
        gender,
        email,
        nationality,
        dateOfBirth,
        educationBackground,
        preferedContactMethod,
      });
      await user.save();

      return user;
    } catch (error) {
      throw error;
    }
  },
};

export default UserMutations;
