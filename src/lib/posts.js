import { fetch } from "./hasura"

export default async () => {
  const query = `
    {
      posts(distinct_on: team_slug, order_by: {team_slug: asc, created_at: desc}) {
        id
        mood
        term
        needs
        author
        team_slug
        priorities
        created_at
        kpis {
          id
          value
          name
        }
      }
    }
  `

  try {
    const data = await fetch(query)
    const { posts } = data
    return posts
  } catch (error) {
    console.error(error)
    return []
  }
}
