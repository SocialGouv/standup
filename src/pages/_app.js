import "github-markdown-css"
import "../styles/main.scss"

import * as Sentry from "@sentry/node"
import React from "react"

Sentry.init({
  dsn: process.env.SENTRY_DSN,
})

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
