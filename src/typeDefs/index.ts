import { gql } from "apollo-server-express";
import User from "../typeDefs/User/user";

const typeDefs = gql`
  ${User}

  type Query {
    getAllUsers(page: Int = 1, limit: Int = 10): [User]
  }

  type Mutation {
    createUser(user: UserInput!): User
  }
`;

export default typeDefs;
