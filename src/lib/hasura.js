import { GraphQLClient } from "graphql-request"

const url = process.env.HASURA_URL

export const fetch = async (query, variables) => {
  console.log("URL:", url)
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "content-type": "application/json"
    }
  })

  return await graphQLClient.request(query, variables)
}
