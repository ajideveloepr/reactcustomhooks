import React from 'react'
import { Feed } from './Feed'

function Home({ posts, isLoading, fetchError }) {
  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading Posts...</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{ color: 'red' }}>
        {fetchError} </p>}
      {!isLoading && !fetchError && (posts.length ? <Feed posts={posts} /> : <p className='statusMsg'>
        No posts to Display
      </p>)}
    </main>
  )
}

export default Home