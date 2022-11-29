import { createSlice } from '@reduxjs/toolkit'


const initialState = [
    { id: '1', title: 'Learning Redux Toolkit', content: 'I\'ve heard very good things about redux' },
    { id: '2', title: 'Slices ....', content: 'It\'s a bad thing that I can\'t use lorem here' }
]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer