import React ,{useEffect, useState} from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import Nav_bar from '../Nav_bar';
import axios from 'axios';
import Api_base from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_filiers } from '../store/ps';
import Loading from "../page_principal/loading.js"
import { Stack, Alert } from '@mui/material';





function N_post(){
     const [type,setType]=useState()
     const [fl,setfl]=useState([])
     const filiers=useSelector(state=>state.post.filiers)
     const loading = useSelector(state=>state.post.loading)
     const [showSuccessAlert, setShowSuccessAlert] = useState(false);
     const dispatch= useDispatch()
     useEffect(()=>{
        dispatch(fetch_filiers())
     },[])
   // const filiers = [{"id":1,"code_filier":"dev","nom_filier":"developpement digital","created_at":null,"updated_at":null},{"id":2,"code_filier":"test1","nom_filier":"test1","created_at":null,"updated_at":null},{"id":3,"code_filier":"test2","nom_filier":"test2","created_at":null,"updated_at":null},{"id":4,"code_filier":"test3","nom_filier":"test3","created_at":null,"updated_at":null},{"id":5,"code_filier":"test4","nom_filier":"test4","created_at":null,"updated_at":null},{"id":6,"code_filier":"test5","nom_filier":"trst5","created_at":null,"updated_at":null}]

 

    function  ajouter(e){
         e.preventDefault()  
         const formData = new FormData();
         formData.append('image', e.target.file.files[0]);
         formData.append('titre', e.target.title.value);
         formData.append('desc', e.target.desc.value);
         formData.append('info', e.target.Info.value);
         formData.append('type', type);
         formData.append('filier', fl);
        const token = "1|a71WdOe17sXZD3szQ4F8dqcOzawukt650jeGQVv5";
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        console.log(formData)
      axios.post(`${Api_base}ajouter_post`,formData ,{headers}).then((response)=>{
       if(response.data=="post ajouter"){
        setShowSuccessAlert(true)
       }
       
      })  
    }

    console.log(showSuccessAlert)
 if(loading){
    return(
      <Loading/>
    )
    }
    return(
      <div>
     
        <Nav_bar/>
        
        <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={ajouter} encType="multipart/form-data"  Validate sx={{width:"35%" ,  '@media (max-width: 600px)': { width: '70%' },}}>
        {  
        showSuccessAlert &&
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">le post envoyer </Alert>
        </Stack>
}
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
              <TextField
              margin="normal"
              variant="standard"
              fullWidth
              id="file"
              label="file"
              name="file"
              autoComplete="file"
              type='file'
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
          <MenuItem value="stage">stage</MenuItem>
          <MenuItem value="travaille">travaille</MenuItem>
          <MenuItem value="etude">etude</MenuItem>
        </Select>
      </FormControl>
    { filiers && <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={filiers}
      value={fl}
      onChange={(event, value) => {
        setfl(value); // Mettez à jour les valeurs sélectionnées
      }}
      getOptionLabel={(option) => option.nom_filier}
      renderInput={(params) => (
        <TextField {...params} name='filier' label="limitTags" placeholder="Favorites" />
      )}
      sx={{ width: '500px' }}
    /> }
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
    )

}


export default N_post