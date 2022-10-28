import { gql } from "apollo-server-express";

export default gql`
  input UserInput {
    name: String
    address: String
    phone: String
    gender: String
    email: String
    nationality: String
    dateOfBirth: String
    educationBackground: String
  }

  type User {
    id: ID
    name: String
    address: String
    phone: String
    gender: String
    email: String
    nationality: String
    dateOfBirth: String
    educationBackground: String
  }
`;
