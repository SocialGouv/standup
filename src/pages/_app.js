import "github-markdown-css"
import "../styles/main.scss"

import { initMatomo } from "@lib/matomo"
import * as Sentry from "@sentry/node"
import React, { useEffect } from "react"

Sentry.init({
  dsn: process.env.SENTRY_DSN,
})

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initMatomo({
      piwikUrl: process.env.MATOMO_URL,
      siteId: process.env.MATOMO_SITE_ID,
    })
  })
  return <Component {...pageProps} />
}
