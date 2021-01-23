import { fetch } from "./hasura"

const org = process.env.GITHUB_ORGANIZATION

export default async () => {
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
    const {
      organization: {
        teams: { nodes },
      },
    } = data
    return nodes
  } catch (error) {
    console.error(error)
    return []
  }
}
