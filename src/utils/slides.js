import { shuffle } from "lodash"
import React, { useContext } from "react"

import extraSlides from "../slides.yml"

const SlidesContext = React.createContext()

export const SlidesProvider = ({ teams, posts, children }) => {
  const getTeam = slug => teams.find(team => slug === team.slug)
  const getMissingTeams = () => teams.filter(team => !hasPost(team))
  const hasPost = team => posts.find(post => post.team_slug === team.slug)

  const filterPosts = posts =>
    posts.filter(
      post => (
        ((post.team = getTeam(post.team_slug)), (post.title = post.team.name)),
        post.team
      )
    )

  const slides = [
    ...shuffle(filterPosts(posts)),
    { title: "Les Absents", teams: getMissingTeams() },
    ...extraSlides
  ]

  return (
    <SlidesContext.Provider value={slides}>{children}</SlidesContext.Provider>
  )
}

export const useSlides = () => useContext(SlidesContext)
