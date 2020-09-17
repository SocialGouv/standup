import { render } from "@testing-library/react"
import React from "react"

import Index from "../src/pages/index"

test("renders deploy link", () => {
  const { getByText } = render(<Index />)
  const linkElement = getByText(/Stand up/)
  expect(linkElement).toBeInTheDocument()
})
