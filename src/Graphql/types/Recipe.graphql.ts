export default `

type Query {
  getMyRecipe(id: ID!): [Recipe]!
  getOneRecipe(id: ID!): Recipe!
  getRecipes: [Recipe!]
}

type Recipe implements Node {
  id: ID!
  author: User!
  name: String!
  description: String!
  ingredients: String!
  image: String
  createdAt: Date!
  category: Category
}

type Mutation {
  createRecipe(input: RecipeInput!): Recipe!
  updateRecipe(input: UpdateRecipeInput!): Boolean!
  deleteRecipe(id: ID!, userId: String): Boolean!
}

input RecipeInput {
  author: ID!
  name: String!
  ingredients: String!
  description: String!
  category: String!
}
input UpdateRecipeInput {
  name: String!
  ingredients: String!
  description: String!
  category: CategoryInput
}

`
