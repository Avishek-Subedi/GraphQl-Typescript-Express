import { gql } from "apollo-server-express";

export default gql`
  enum Gender {
    MALE
    FEMALE
    OTHERS
  }

  enum PreferedContactMethod {
    EMAIL
    PHONE
    NONE
  }

  input UserInput {
    name: String!
    address: String!
    phone: String
    gender: Gender
    email: String!
    nationality: String
    dateOfBirth: String!
    educationBackground: String
    preferedContactMethod: PreferedContactMethod
  }

  type User {
    id: ID!
    name: String!
    address: String!
    phone: String
    gender: Gender
    email: String!
    nationality: String
    dateOfBirth: String!
    educationBackground: String
    preferedContactMethod: PreferedContactMethod
  }
`;
