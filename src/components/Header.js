import Counter from "@components/Counter"
import { useIndex } from "@utils/index"
import Link from "next/link"
import React from "react"

const Header = () => {
  const [{ index, slides }] = useIndex()

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
      {slides[index].team && <Counter start={0} />}
    </div>
  )
}

export default Header
