import { configureStore } from '@reduxjs/toolkit'
import  Info_slice  from './profil'
import  Posts  from './ps'

export const Store=configureStore({
    reducer:{
       profil:Info_slice,
       post:Posts
    }
})

