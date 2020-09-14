export default `

type Query {
  getUser(id: ID): User!
  getUsers: [User!]
}
type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  active: Boolean!
  createdAt: Date!
  role: [Roles]!
  recipe: [Recipe!]
}

enum Roles {
  user
  admin
}

type UserShort {
  id: ID
  name: String
}
type authPayload {
  token: String!
  user: UserShort
}

type Mutation {
  signUp(input: UserInput!): User!
  updateUser(input: UserUpdateInput!): Boolean!
  deleteUser(id: ID!): Boolean!
  Login(input: LoginInput!): authPayload!
  Logout(input: LogoutInput): Boolean
}

input UserInput {
  name: String!
  email: String!
  password: String!
  roles: String
}

input UserUpdateInput {
  id: ID
  email: String
  password: String
}

input LoginInput {
  email: String!
  password: String!
}

input LogoutInput {
  id: ID
}

`
