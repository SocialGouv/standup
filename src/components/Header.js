import Link from "next/link"
import React from "react"

import Counter from "@/components/Counter"
import useIndex from "@/utils/index"
import useSlides from "@/utils/slides"

const Header = () => {
  const [index] = useIndex()
  const { slides } = useSlides()

  return (
    <div className="header">
      <div className="marianne" />
      <h1>
        <Link href="/" as="/">
          <a>Stand up</a>
        </Link>
        <small className="description">
          Le stand up de <a href="https://github.com/socialgouv">@SocialGouv</a>
        </small>
      </h1>
      {slides && slides[index].team && <Counter start={0} />}
    </div>
  )
}

export default Header
