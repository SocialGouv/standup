import fetch from "isomorphic-unfetch"

const trendingGif = []

export default {
  title: "Merci",
  entries: trendingGif,
}

// HACK(douglasduteil): async fetch for a trending gif to thanks people :)
// This should be not blocking...
fetch(
  "https://api.giphy.com/v1/gifs/trending?api_key=l9shMH14n49gY5GiMl4IQZjkEFLW7e5x&limit=1&rating=g"
)
  .then((res) => res.json())
  .then(({ data: [{ images: { looping: { mp4 } } }] }) =>
    trendingGif.push(asPrettyImage(mp4))
  )
  .catch(console.error)

function asPrettyImage(
  url = "https://media.giphy.com/media/XreQmk7ETCak0/giphy.mp4"
) {
  return `<video src=${url} alt="Bonne Journée"  muted autoplay />`
}
