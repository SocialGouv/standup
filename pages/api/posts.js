import { fetch } from "../../src/lib/hasura"

export default async (req, res) => {
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

  const data = await fetch(query)

  res.json(data.posts)
}
