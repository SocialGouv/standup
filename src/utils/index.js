import React, { useContext, useReducer } from "react"

import { useSlides } from "utils/slides"

const IndexContext = React.createContext()

const next = state => {
  const { index, maxIndex } = state
  const newIndex = index < maxIndex ? index + 1 : index
  return { index: newIndex, maxIndex }
}

const previous = state => {
  const { index, maxIndex } = state
  const newIndex = index < 1 ? 0 : index - 1
  return { index: newIndex, maxIndex }
}

function reducer(state, action) {
  switch (action) {
    case "next":
      return next(state)
    case "previous":
      return previous(state)
    default:
      throw new Error()
  }
}

export const IndexProvider = ({ children }) => {
  const slides = useSlides()
  const initialState = { index: 0, maxIndex: slides.length }
  const contextValue = useReducer(reducer, initialState)
  return (
    <IndexContext.Provider value={contextValue}>
      {children}
    </IndexContext.Provider>
  )
}

export const useIndex = () => useContext(IndexContext)
