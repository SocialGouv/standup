import React, { useContext } from "react"

const TeamsContext = React.createContext()

export const TeamsProvider = ({ teams, children }) => {
  return <TeamsContext.Provider value={teams}>{children}</TeamsContext.Provider>
}

export const useTeams = () => useContext(TeamsContext)
