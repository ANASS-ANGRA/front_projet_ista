import React ,{useState} from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';





function N_post(){
     const [type,setType]=useState()


    return(
        <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form"   Validate sx={{width:"35%" ,  '@media (max-width: 600px)': { width: '70%' },}}>
          <TextField
              margin="normal"
              variant="standard"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="Title"
              autoFocus
            />
           <TextField
              margin="normal"
              variant="standard"
              required
              fullWidth
              id="desc"
              label="Desc"
              name="desc"
              autoComplete="desc"
              autoFocus
            />
           <TextField
             margin="normal"
             variant="standard"
            required
            fullWidth
            id="Info"
            label="Info"
            name="Info"
            autoComplete="Info"
            autoFocus
            multiline  // Permet d'accepter plusieurs lignes
           rows={4}   // Définit le nombre de lignes affichées
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
    )
}


export default N_post