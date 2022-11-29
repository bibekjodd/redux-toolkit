import React from 'react'
import './App.css'
import AddPostForm from './features/posts/AddPostForm'
import PostsList from './features/posts/PostsList'


function App() {
  return (
    <div className='w-full flex flex-col items-center text-lg min-h-screen'>
      <AddPostForm />
      <PostsList />
    </div>
  )
}

export default App