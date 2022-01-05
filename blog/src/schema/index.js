const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Article {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
  }
  type Comment {
    _id: ID!
    article_id: String!
    body: String!
    createdAt: String!
  }
  input ArticleType {
    title: String!
    body: String!
  }
  input CommentType {
    article_id: String!
    body: String!
  }
  type RootQuery {
    articles: [Article!]
    article(_id: String!): Article!
    comments: [Comment!]
    comment(_id: String!): Comment!
  }
  type Mutation {
    createArticle(article:ArticleType): Article,
    deleteArticle(_id: String): Article,
    updateArticle(_id: String, title: String,body: String): String
    createComment(comment:CommentType): Comment,
    deleteComment(_id: String): Comment,
    updateComment(_id: String, article_id: String,body: String): String
  }
  schema {
    query: RootQuery
    mutation: Mutation
  }
`);