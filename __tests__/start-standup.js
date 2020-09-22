import { queryAllByAttribute } from "@testing-library/dom"
import { fireEvent, render } from "@testing-library/react"
import React from "react"

import Index from "../src/pages/index"

test("renders deploy link", async () => {
  const component = render(<Index />)
  const { getByText } = component
  const button = getByText("Commencer")
  const getById = queryAllByAttribute.bind(null, "id")

  fireEvent.click(button)
  const items = await getById(component.container, /slide-[0-9]/)
  expect(items.length).toBeGreaterThanOrEqual(2)
})
