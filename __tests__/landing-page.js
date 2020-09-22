import { render } from "@testing-library/react"
import React from "react"

import Index from "../src/pages/index"

test("renders deploy link", async () => {
  const { getByText } = render(<Index />)
  const title = getByText(/Stand up/)
  expect(title).toBeInTheDocument()
  const brand = getByText(/LA FABRIQUE NUMERIQUE/)
  expect(brand).toBeInTheDocument()
  const button = getByText("Commencer")
  expect(button).toBeInTheDocument()
})
