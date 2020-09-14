export default `

type Query {
  getCategories: [Category]
  getOneCategory: Category!
}

type Category {
  id: ID
  name: String!
}
type Mutation {
  createCategory(input: CategoryInput): Category
  updateCategory(input: UpdateCategoryInput): Boolean
  deleteCategory(id: ID): Boolean
}
input CategoryInput {
  name: String!
}
input UpdateCategoryInput {
  id: ID!
  name: String!
}

`
