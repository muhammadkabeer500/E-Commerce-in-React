import React from 'react'

export default function SectionTittle(Props) {
  return (
    <div className="gap-4 flex items-center">
    <div className="h-10 w-5 bg-red-500 rounded"></div>
    <h2 className="font-semibold text-xl text-primary">{Props.text}</h2>
  </div>
  )
}
