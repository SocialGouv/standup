import React from "react"
import Link from "next/link"

import Counter from "./Counter"
import { useIndex } from "utils/index"
import { useSlides } from "utils/slides"

const Header = ({ sliding }) => {
  const slides = useSlides()
  const [{ index }] = useIndex()

  return (
    <div className="header">
      <div className="marianne"></div>
      <h1>
        <Link href="/" as="/">
          <a>Stand up</a>
        </Link>
        <small className="description">
          Le stand up de <a href="https://github.com/socialgouv">@SocialGouv</a>
        </small>
      </h1>
      {slides[index].team && <Counter start={0} />}
    </div>
  )
}

export default Header
