import "../style/profile_user.css"
import Nav_bar from "../Nav_bar"
import Info_user from "./info_user"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";






function Profile_user(){
        const [type,setType]=useState()
        const [email , setEmail]= useState("anassangra2003@gmail.com")
        const [telephone ,setTelephone]=useState('0603250453')
        const [local ,SetLocal]=useState("isicode")



    return(
        <div>
             <Nav_bar/>
             <div >
                <Info_user/>
                <div id="page_info_stagire"> 
                <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form"   Validate sx={{width:"50%" ,  '@media (max-width: 600px)': { width: '70%' },}}>
          <TextField
              margin="normal"
              variant="standard"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              autoFocus
            />
         <TextField
              margin="normal"
              variant="standard"
              required
              fullWidth
              id="telephone"
              label="telephone"
              name="telephone"
              type="number"
              value={telephone}
              onChange={(e)=>{setTelephone(e.target.value)}}
              autoComplete="email"
              autoFocus
            />
         
        <FormControl variant="standard" sx={{ m: 1, minWidth: "100%"}}>
        <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
        <Select
        required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={type}
          onChange={(e)=>{setType(e.target.value)}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField
              margin="normal"
              variant="standard"
              fullWidth
              id="local"
              label="local"
              name="local"
              autoComplete="local"
              autoFocus
              value={local}
              onChange={(e)=>{SetLocal(e.target.value)}}
            />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor:"black"}}
            >
              send
          </Button>
        </Box>

     
          </Box>
                </div>
             </div>
        </div>
    )
}

export default Profile_user