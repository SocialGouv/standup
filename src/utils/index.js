import { useRef, useEffect, useReducer } from "react"

const initialState = { index: 0 }

function reducer(state, action) {
  switch (action.type) {
    case "next":
      return { index: state.index + 1 }
    case "previous":
      return { index: state.index - 1 }
    default:
      throw new Error()
  }
}

export const useIndex = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) {
      ref.current = useReducer(reducer, initialState)
    }
  }, [])

  return ref.current
}

export default useIndex
