import React, { useEffect, useState } from 'react'
import { postAdded } from './postsSlice'
import { useDispatch } from 'react-redux'


function AddPostForm() {
    const disptach = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) {
            alert("Plz Enter all the fields")
            return;
        }
        const id = new Date().getTime().toString();
        disptach(postAdded({ id, title, content }))
        setTitle('')
        setContent('')
        document.querySelector('input').focus();
    }

    useEffect(() => {
        document.querySelector('input').focus();
    }, [])

    return (
        <form onSubmit={handleSubmit} className='w-3/12 mt-10 flex flex-col items-start gap-y-5'>
            <input type="text" name="" id="" placeholder='Enter title here...' value={title} onChange={(e) => { setTitle(e.target.value) }}
                className='w-full outline-none border-b-2 border-b-neutral-400 focus:border-b-sky-500 px-1 text-lg'
            />
            <textarea name="message" id="" rows="4" placeholder='Enter content here...' value={content} onChange={(e) => { setContent(e.target.value) }}
                className='border-b-2 border-b-neutral-400 focus:border-b-sky-500 outline-none p-1 w-full text-lg'
            ></textarea>
            <button
                className='px-5 py-1 self-end text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700 rounded-md shadow-xl shadow-sky-200 hover:shadow-sky-300'>
                Add Post</button>
        </form>
    )
}

export default AddPostForm
