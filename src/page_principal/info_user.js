import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import "../style/info_user.css"
import Nav_bar from '../Nav_bar';


function Info_user(){
    const [nom , setNom]=useState("angra")
    const [prenom ,setPrenom]=useState("anass")
    const [email ,setEmail]=useState("anassangra2003@gmail.com")
    const [stc,setStatic]=useState("null")
    const [filier , setFilier ]=useState("developpement digital")
    const [erreur,setErreur]=useState();
   
    function change_pass(event){
        event.preventDefault()
       const pass = event.target.password.value
       const v_pass = event.target.v_password.value
       if(pass == v_pass){
        if (pass.length < 8) {
            setErreur('Password must be at least 8 characters long');
          } else {

          }
       }else{
         setErreur("confireme password")
       }
    }

    return(

  <div id='page_info'>
    <div id="page_info1">
     <div id='info'>
         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p><label className='label_page_info'>nom : </label><label className='info_change'>{nom}</label></p>
        <p><label className='label_page_info'>prenom : </label><label className='info_change'>{prenom}</label></p> 
        <p><label className='label_page_info'>filier : </label><label className='info_change'>{filier}</label></p>
        <p><label className='label_page_info'>email : </label><label >{email}</label></p>   
      </div>
      <div>
        <Box component="form" onSubmit={change_pass}   Validate sx={{width:"50%"  ,  '@media (max-width: 600px)': { width: '70%' },}}>
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
        
      </div>
      </div>
    </div>
    )

}

export default Info_user