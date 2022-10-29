#GraphQL Task : Varosha Technologies

This is the simple CRUD operations on GraphQL

## API Reference

run "npm run dev"

```http
  http://localhost:4000/graphql
```

| Type     | Parameter                | Description             |
| :------- | :----------------------- | :---------------------- |
| `string` | `name`                   | **Required**. Full Name |
| `enum`   | `gender`                 | male, female,others     |
| `number` | `phone`                  | example: +977-98745622  |
| `email`  | `email`                  | valid email address     |
| `string` | `address`                | valid address           |
| `string` | `nationality`            | country of origin       |
| `DOB`    | `dateOfBirth`            | Date of Birth           |
| `string` | `educationBackground`    | Academic Level          |
| `enum`   | `preferredModeOfContact` | email,phone,none        |

#### Run mutations with same parameters

#### **Mutation :**

```js
 mutation CreateUser($createUser: UserInput!) {
  createUser(user: $createUser) {
    id
    name
    address
    phone
    gender
    email
    nationality
    dateOfBirth
    educationBackground
    preferedContactMethod

  }
}
```

#### **Query :**

```ts
query Query($page: Int, $limit: Int) {
  getAllUsers(page: $page, limit: $limit) {
    id
    name
    address
    phone
    gender
    email
    nationality
    dateOfBirth
    educationBackground
    preferedContactMethod
  }
}
```

Since the api is made on graphql you can specifically request any parameters or perfom mutation.

## Authors

- [@avishek-subedi](https://www.github.com/avishek-subedi)

## Packages Used

This project depends of following node modules:

- apollo-server-express
- dotenv
- express
- express-validator
- graphql
- mongoose
- validator
- joi

## Dev Dependencies

- @types/express
- @types/validator
- nodemon
- ts-node-dev
- @graphql-codegen/typescript-resolvers

## Deployment

To deploy this project run

```bash
  npm run start
```

## Features

- CRUD API

## Tech Stack

**Server:** Node, Express

## Run Locally

Clone the project

```bash
  git clone https://github.com/Avishek-Subedi/GraphQl-Typescript-Express
```

Go to the project directory

```bash
  cd GraphQl-Typescript-Express
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
