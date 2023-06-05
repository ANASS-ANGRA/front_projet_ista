import { createAsyncThunk , createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import Api_base from '../api';
import { Build } from '@mui/icons-material';
 

export const fetch_info_personne=createAsyncThunk("personne",async()=>{
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  
  const response = await axios.get(`${Api_base}profile`,{headers})
  return response.data
})

export const fetch_mes_posts=createAsyncThunk("mes_posts", async ()=>{
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const response = await axios.get(`${Api_base}mes_post`,{headers})
  return response.data
})

export const fetch_filier= createAsyncThunk("filier" , async()=>{
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const response = await axios.get(`${Api_base}mon_filier`,{headers})
  return response.data
})

export const mon_status =createAsyncThunk("mon_status",async()=>{
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const response = await axios.get(`${Api_base}mon_status`,{headers})
  return response.data
})

export const fetch_status= createAsyncThunk('status',async ()=>{
    const response = await axios.get(`${Api_base}getstatus`)
    return response.data
})

const initialState={
    tokens:null,
    nom:'',
    email:null,
    info_p:null,
    filier_p:null,
    status_p:null,
    loading:false,
    status:null,
    mes_posts:[]
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
    },supp_token:(state, action) => {
      localStorage.removeItem("token");
      state.tokens = null;
    }
    },extraReducers:(builder) => {
      builder.addCase(fetch_info_personne.pending, (state, action) => {
           state.loading=true
      });
      builder.addCase(fetch_info_personne.fulfilled, (state, action) => {
          state.loading=false
        state.info_p = action.payload;
      });
      builder.addCase(fetch_info_personne.rejected,(state,action)=>{
        if (action.error.message == 'Request failed with status code 401') {
          localStorage.removeItem("token");
          state.tokens = null;
        }
      });
      builder.addCase(fetch_status.pending,(state,action)=>{
         state.loading=true
      });
      builder.addCase(fetch_status.fulfilled ,(state,action)=>{
        state.status=action.payload;
        state.loading=false
      });
      builder.addCase(fetch_mes_posts.pending ,(state,action)=>{
        state.loading=true
      });
      builder.addCase(fetch_mes_posts.fulfilled , (state ,action)=>{
        state.loading=false
        state.mes_posts=action.payload
      })
      builder.addCase(fetch_filier.pending,(state,action)=>{
        state.loading=true
      })
      builder.addCase(fetch_filier.fulfilled,(state ,action)=>{
        state.loading=false
        state.filier_p=action.payload
      })
      builder.addCase(mon_status.pending , (state ,action)=>{
        state.loading=true
      })
      builder.addCase(mon_status.fulfilled ,(state ,action)=>{
          state.loading=false
          state.status_p=action.payload
      })
     }
}
)

export default Info_slice.reducer

export const {Token_s ,Token_storage,supp_token }= Info_slice.actions