import Extra from "@components/Extra"
import Missing from "@components/Missing"
import Post from "@components/Post"
import Stamp from "@components/Stamp"
import Weather from "@components/Weather"
import { addDays, differenceInWeeks, getISODay } from "date-fns"
import React from "react"

const getClosestDayOfLastWeek = (dayOfWeek, fromDate = new Date()) => {
  const dayOfWeekMap = {
    Fri: 5,
    Mon: 1,
    Sat: 6,
    Sun: 7,
    Thur: 4,
    Tue: 2,
    Wed: 3,
  }
  const offsetDays = -7 - (getISODay(fromDate) - dayOfWeekMap[dayOfWeek])
  return addDays(fromDate, offsetDays)
}

const isObselete = (date) => {
  const lastTuesday = getClosestDayOfLastWeek("Tue")
  console.log("lastTuesday", lastTuesday)
  return differenceInWeeks(lastTuesday, new Date(date)) >= 2
}

const Slide = ({ id, data }) =>
  console.log("data", data) || (
    <div id={id} className="slide" key={data.team_slug}>
      <h1 className="title">
        <Weather status={data.mood} />
        {data.team?.name || data.title}
      </h1>

      <div className="content">
        {isObselete(data.created_at) && <Stamp />}
        {data.team ? (
          <Post data={data} />
        ) : data.teams ? (
          <Missing teams={data.teams} />
        ) : (
          <Extra data={data} />
        )}
      </div>
    </div>
  )

export default Slide
