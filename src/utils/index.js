import React, { useContext, useReducer } from "react"

const IndexContext = React.createContext()

const initialState = { index: 0 }

function reducer(state, action) {
  switch (action) {
    case "next":
      console.log("NEXT")
      return { index: state.index + 1 }
    case "previous":
      console.log("PREVIOUS")
      return { index: state.index - 1 }
    default:
      throw new Error()
  }
}

export const IndexProvider = ({ children }) => {
  const contextValue = useReducer(reducer, initialState)
  return (
    <IndexContext.Provider value={contextValue}>
      {children}
    </IndexContext.Provider>
  )
}

export const useIndex = () => {
  const contextValue = useContext(IndexContext)
  return contextValue
}
