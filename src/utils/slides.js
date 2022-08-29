import { request } from "graphql-request"
import { shuffle } from "lodash"
import useSWR from "swr"

import extraSlides from "../slides.yml"

const url = process.env.NEXT_PUBLIC_HASURA_URL

const fetcher = async (query) => {
  const { posts } = await request(url, query)
  const filteredPosts =
    posts &&
    posts.filter(
      (slide) =>
        slide.team && !slide.team.parentTeam && slide.team.privacy === "VISIBLE"
    )
  const slides = filteredPosts && [...shuffle(filteredPosts), ...extraSlides]
  return Promise.resolve(slides)
}

const query = `{
  posts(
    distinct_on: team_slug,
    order_by: {team_slug: asc, created_at: desc}
    where: {team_slug: {_nin: ["fce", "transition-collective", "dora", "emjpm", "carnet-de-bord"]}}
  ) {
    id
    mood
    term
    needs
    author
    team_slug
    priorities
    created_at
    team {
      name
      privacy
      avatarUrl
      description
      parentTeam {
        name
      }
      members(first: 100) {
        nodes {
          login
          name
          avatarUrl
        }
      }
    }
    kpis {
      id
      value
      name
    }
  }
}`

const useSlides = () => {
  const { data: slides, error } = useSWR(query, fetcher, {
    revalidateOnFocus: false,
  })

  return { error, slides }
}

export default useSlides
