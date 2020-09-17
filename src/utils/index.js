import { useSlides } from "@utils/slides"
import React, { useContext, useReducer } from "react"

const IndexContext = React.createContext()

const update = (state, index) => ({ ...state, index })

const startSliding = (state) =>
  state.isSliding ? state : { ...state, isSliding: true }

const stopSliding = (state) => ({ ...state, isSliding: false })

const reducer = (state, action) => {
  const { name, index } = action

  switch (name) {
    case "update":
      return update(state, index)
    case "startSliding":
      return startSliding(state)
    case "stopSliding":
      return stopSliding(state)
    default:
      throw new Error()
  }
}

export const IndexProvider = ({ children }) => {
  const slides = useSlides()
  const initialState = {
    index: 0,
    isSliding: false,
    maxIndex: slides.length,
    slides,
  }
  const contextValue = useReducer(reducer, initialState)
  return (
    <IndexContext.Provider value={contextValue}>
      {children}
    </IndexContext.Provider>
  )
}

export const useIndex = () => useContext(IndexContext)
