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

const filterPosts = (posts) =>
  posts.reduce(
    (result, slide) => {
      result[isRecentSlide(slide) ? "recentPosts" : "outdatedPosts"].push(slide)
      return result
    },
    { outdatedPosts: [], recentPosts: [] }
  )

const addOutdatedPostsSlideToExtraSlides = (posts) =>
  extraSlides.unshift({
    markdown: shuffle(posts)
      .map(
        (post) =>
          `### ![other-startup-logo](${post.team?.avatarUrl}) ${post.team?.name}`
      )
      .join("\n"),
    title: "Les autres startups",
  })

const fetcher = async (query) => {
  const { posts } = await request(url, query)
  const visiblePosts =
    posts &&
    posts.filter(
      (slide) =>
        slide.team &&
        slide.created_at &&
        !slide.team.parentTeam &&
        slide.team.privacy === "VISIBLE"
    )
  const { recentPosts, outdatedPosts } = filterPosts(visiblePosts)

  addOutdatedPostsSlideToExtraSlides(outdatedPosts)

  const slides = recentPosts && [...shuffle(recentPosts), ...extraSlides]

  return Promise.resolve(slides)
}

const query = `{
  posts(
    distinct_on: team_slug,
    order_by: {team_slug: asc, created_at: desc}
    where: {team_slug: {_nin: ["fce", "transition-collective", "dora", "emjpm", "carnet-de-bord", "nos1000jours", "appel-a-idees-fabrique-numerique",
  "data-ia",
  "devops-psn",
  "evolution-plateforme",
  "fabrique",
  "plateforme",
  "startup-bootstrap",
  "carnets-standup",
  "maison-de-l-autisme",
  "mano",
  "nata",
  "ozensemble",
  "tumeplay",
  "vao",
  "sre"]}}
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
