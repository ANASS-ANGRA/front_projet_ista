import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import "../style/info_user.css"
import Nav_bar from '../Nav_bar';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_info_personne, supp_token } from '../store/profil';
import Loading from "./loading";
import axios from 'axios';
import Api_base from '../api';
import { Stack, Alert } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';


function Info_user(){
    const [erreur,setErreur]=useState();
    const info = useSelector(state=>state.profil.info_p)
    const filier = useSelector(state=>state.profil.filier_p)
    const loading = useSelector(state => state.profil.loading)
    const disptch =useDispatch()
    const Nav =useNavigate()
    const [showSuccessAlert,setShowSuccessAlert]=useState(false)
    

    function change_pass(event){
        event.preventDefault()
       const pass = event.target.password.value
       const v_pass = event.target.v_password.value
       if(pass == v_pass){
        if (pass.length < 8) {
            setErreur('Password must be at least 8 characters long');
          } else {
            const headers = {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            };
            const data={
              new_pass:pass
            }
            axios.post(`${Api_base}update_pass`,data,{headers}).then((response)=>{
               if(response.data=="password change"){
                     setShowSuccessAlert(true)
               }
            })
          }
       }else{
         setErreur("confireme password")
       }
    }
    function logaut(){
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      axios.get(`${Api_base}logout`,{headers}).then(()=>{
         disptch(supp_token()) 
       Nav("/login")
        
      })
   }

    return(
  <div id='page_info'>
    <div id="page_info1">
     <div id='info'>
         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p><label className='label_page_info'>nom : </label><label className='info_change'>{info?.nom}</label></p>
        <p><label className='label_page_info'>prenom : </label><label className='info_change'>{info?.prenom}</label></p> 
       {filier?.nom_filier &&<p><label className='label_page_info'>filier : </label><label className='info_change'>{filier?.nom_filier}</label></p>}
        <p><label className='label_page_info'>email : </label><label >{info?.email}</label></p>   
      </div>
      <div>
        <Box component="form" onSubmit={change_pass}   Validate sx={{width:"50%"  ,  '@media (max-width: 600px)': { width: '70%' },}}>
        {  
        showSuccessAlert &&
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">info update </Alert>
        </Stack>
         }
          <TextField
              margin="normal"
              variant="standard"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="Title"
              autoFocus
            />
           <TextField
              margin="normal"
              variant="standard"
              required
              fullWidth
              name="v_password"
              label=" confirme Password"
              type="password"
              id="v_password"
              autoComplete="v_desc"
              autoFocus
              helperText={erreur && erreur}
            />

           <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor:"black"}}
             >
               UPDATE
          </Button>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{marginTop:"-2%" ,backgroundColor:"black"}}
              onClick={logaut}
             >
              deconnection <LogoutIcon/>
          </Button>
             
      
              
  
        
      </div>
      </div>
    </div>
    )

}

export default Info_user