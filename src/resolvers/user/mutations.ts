import User from "../../models/user.model";

const UserMutations: any = {
  createUser: async (parent: any, args: any, context: any) => {
    const {
      name,
      address,
      phone,
      gender,
      email,
      nationality,
      dateOfBirth,
      educationBackground,
    } = args.user;
    const user = new User({
      name,
      address,
      phone,
      gender,
      email,
      nationality,
      dateOfBirth,
      educationBackground,
    });
    await user.save();

    return user;
  },
};

export default UserMutations;
