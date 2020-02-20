import { GraphQLClient } from "graphql-request"

export default async (req, res) => {
  const user = process.env.GH_USER
  const token = process.env.GH_TOKEN
  const url = "https://api.github.com/graphql"
  const auth = Buffer.from(`${user}:${token}`).toString("base64")

  const query = `
    query {
      organization(login: "SocialGouv") {
        teams(
          first:100,
          privacy: VISIBLE,
          rootTeamsOnly:true,
          orderBy: {field: NAME, direction: ASC}
        ) {
          totalCount
          edges {
            node {
              slug
              name
              avatarUrl
              description
            }
          }
        }
      }
    }
  `

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Basic ${auth}`
    }
  })

  const data = await graphQLClient.request(query)
  console.log("Teams", data.organization.teams.edges.length)
  res.json(data.organization.teams.edges)
}
