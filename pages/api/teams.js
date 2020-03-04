import { fetch } from "../../src/lib/hasura"

const org = process.env.GH_ORG

export default async (req, res) => {
  const query = `
    query {
      organization(login: "${org}") {
        teams(
          first:100,
          privacy: VISIBLE,
          rootTeamsOnly:true,
          orderBy: {field: NAME, direction: ASC}
        ) {
          totalCount
          nodes {
            slug
            name
            avatarUrl
            description
            members(first: 100) {
              nodes {
                login
                name
                avatarUrl
              }
            }
          }
        }
      }
    }
  `

  try {
    const data = await fetch(query)
    res.json(data.organization.teams.nodes)
  } catch (error) {
    console.log(error)
    res.status(500).json([])
  }
}
