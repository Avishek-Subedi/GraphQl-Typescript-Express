import { gql } from "apollo-server-express";
import User from "../models/user.model";

const typeDefs = gql`
  ${User}

  type Query {
    getAllUsers: [User]
  }

  type Mutation {
    createUser(user: UserInput): User
  }
`;

export default typeDefs;
