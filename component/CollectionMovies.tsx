import React from 'react'
import MovieThumbnail from './MovieThumbnail'

const CollectionMovies = ({ results, title }:any) => {

  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-full mx-auto">
    <h2 className="font-semibold">{title}</h2>
    <div className="flex space-x-6 overflow-y-hidden overflow-x-auto scrollbar-hide p-2 -m-2">
      {results?.map((result:any) => (
        <MovieThumbnail key={result.id} result={result} />
      ))}
    </div>
  </div>
  )
}

export default CollectionMovies