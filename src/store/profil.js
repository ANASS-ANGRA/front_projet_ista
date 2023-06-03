import { createAsyncThunk , createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import Api_base from '../api';
import { Build } from '@mui/icons-material';
 

export const fetch_info_personne=createAsyncThunk("personne",async()=>{
  
  const response = await axios.get(`${Api_base}/profile`)
  return response.data
})

const initialState={
    tokens:null,
    nom:'',
    email:null,
    info_p:null,
    loading:false
}


export const Info_slice=createSlice({
    name:"tokens",
    initialState,
    reducers:{
      Token_s:(state,action)=>{
          state.tokens=action.payload
      },
      Token_storage:(state,action)=>{
        const tk = localStorage.getItem("token");
       if(tk){
         state.tokens=tk
       }
    }
    },extraReducers:(builder) => {
      builder.addCase(fetch_info_personne.pending, (state, action) => {
          state.loading=true
      });
      builder.addCase(fetch_info_personne.fulfilled, (state, action) => {
          state.loading=false
        state.info_p = action.payload;
      });
     }
}
)

export default Info_slice.reducer

export const {Token_s ,Token_storage}= Info_slice.actions