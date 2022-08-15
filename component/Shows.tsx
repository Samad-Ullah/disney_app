import React from 'react'
import ShowThumbnail from './ShowThumbnail'

const Shows = ({results , title}:any) => {
  console.log(results)
  return (
    <div className="flex flex-col space-y-2 my-8 px-8 max-w-full mx-auto">
    <h2 className="font-semibold">{title}</h2>
    <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
      {results.map((result:any) => (
        <ShowThumbnail key={result.id} result={result} />
      ))}
    </div>
  </div>
  )
}

export default Shows