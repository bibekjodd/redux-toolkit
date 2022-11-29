import React from 'react'
import { useSelector } from 'react-redux'

function PostsList() {
    const posts = useSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <article key={post.id} className='w-full p-5 border rounded-md shadow-xl shadow-neutral-200'>
            <h3 className='text-xl font-medium'>{post.title}</h3>
            <p className='text-neutral-700'>{post.content}</p>
        </article>
    ))

    return (
        <section className='w-9/12 grid grid-cols-2 mt-20 gap-10'>
            {renderedPosts}
        </section>
    )
}

export default PostsList