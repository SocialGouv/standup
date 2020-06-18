import React from "react"
import Link from "next/link"

import Counter from "./Counter"

const Header = () => (
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
    {/* <Menu /> */}
    <div>
      <Counter start={0} />
    </div>
  </div>
)

export default Header
