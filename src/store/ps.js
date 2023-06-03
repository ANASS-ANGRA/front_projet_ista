import { createAsyncThunk , createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import Api_base from '../api.js'


export const fetch_Posts = createAsyncThunk("Posts", async () => {
    const response = await axios.get(`${Api_base}posts`);
    return response.data;
  });

export const fetch_filiers= createAsyncThunk("filier", async ()=>{
    const response =await axios.get(`${Api_base}getFiliers`);
    return response.data
})  




const initialState={
    loading:false,
    posts:null,
    filiers:null
}


export const Posts=createSlice({
    name:"tokens",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetch_Posts.pending, (state, action) => {
            state.loading=true
        });
        builder.addCase(fetch_Posts.fulfilled, (state, action) => {
            state.loading=false
          state.posts = action.payload;
        });

        builder.addCase(fetch_filiers.pending,(state,action)=>{
            state.loading=true
        });
        builder.addCase(fetch_filiers.fulfilled,(state ,action)=>{
            state.loading=false
            state.filiers=action.payload
        })
    }    
}
)

export default Posts.reducer

export const {}= Posts.actions