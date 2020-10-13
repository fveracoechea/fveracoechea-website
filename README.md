# fveracoechea-website

## Features
- Typescript
- Functional Programing Style
- Material-UI
- [Next.js](https://nextjs.org/)
- GraphQL

## Generating Types from Graphql

### 1. Download the schema from directus
```sh
get-graphql-schema https://cms.fveracoechea.com/fveracoechea/gql?access_token=API_TOKEN > ./graphql/schema.gql
```
### 2. Generate the types
```sh
  yarn graphql-codegen init
```