import UserQueries from "./user/queries";
import UserMutations from "./user/mutations";

const resolvers = {
  Query: {
    ...UserQueries,
  },
  Mutation: {
    ...UserMutations,
  },
};

export default resolvers;
