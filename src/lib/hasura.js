import { GraphQLClient } from "graphql-request"

const url = process.env.HASURA_URL
console.log("HASURA_URL", process.env.HASURA_URL)

export const fetch = async (query, variables) => {
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "content-type": "application/json"
    }
  })

  return await graphQLClient.request(query, variables)
}
