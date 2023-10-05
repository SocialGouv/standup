import { request } from "graphql-request"
import { shuffle } from "lodash"
import useSWR from "swr"

import sujetsTransverses from "../sujets-transverses"

const extraSlides = [
  {
    markdown: sujetsTransverses,
    title: "Sujets transverses",
  },
]

const url = process.env.NEXT_PUBLIC_HASURA_URL

const isRecentSlide = (slide) =>
  slide.created_at &&
  new Date(new Date(slide.created_at).getTime() + 30 * 24 * 60 * 60 * 1000) >=
    new Date()

const fetcher = async (query) => {
  const { posts } = await request(url, query)
  const visibleStartups =
    posts &&
    posts.filter(
      (slide) =>
        slide.team &&
        !slide.team.parentTeam &&
        slide.team.privacy === "VISIBLE" &&
        slide.created_at
    )
  const filteredPosts = visibleStartups.filter((slide) => isRecentSlide(slide))
  const hiddenPosts = visibleStartups.filter((slide) => !isRecentSlide(slide))
  const slides = (filteredPosts && shuffle(filteredPosts)) || []
  if (hiddenPosts.length) {
    const markdown =
      shuffle(hiddenPosts)
        .map((post) => `### ${post.team?.name}`)
        .join("\n") +
      "\n\n![](https://media.giphy.com/media/d8oI97avlJAygnp7RC/giphy.gif)"
    slides.push({
      markdown,
      title: "Elles nous manquent 😿",
    })
  }
  slides.push(...extraSlides)
  return Promise.resolve(slides)
}

const query = `{
  posts(
    distinct_on: team_slug,
    order_by: {team_slug: asc, created_at: desc}
    where: {team_slug: {_nin: ["fce", "transition-collective", "dora", "emjpm", "carnet-de-bord", "nos1000jours", "enfants-du-spectacle"]}}
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
