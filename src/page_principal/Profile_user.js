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
import { useState ,useEffect } from "react";
import Loading from "./loading";
import { useDispatch ,useSelector} from "react-redux";
import { fetch_filier, fetch_info_personne, fetch_status, mon_status, supp_token } from '../store/profil';
import { indigo } from "@mui/material/colors";
import axios from "axios";
import Api_base from "../api";
import { Email } from "@mui/icons-material";
import { Stack, Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";


function Profile_user(){
        const [type,setType]=useState()
        const [email , setEmail]= useState("")
        const [telephone ,setTelephone]=useState('')
        const [local ,SetLocal]=useState("")
        const info = useSelector(state=>state.profil.info_p)
        const status = useSelector(state=>state.profil.status)
        const loading = useSelector(state => state.profil.loading)
        const status_p = useSelector(state => state.profil.status_p)
        const [showSuccessAlert,setShowSuccessAlert]=useState(false)
        const disptch =useDispatch()
        const Nav= useNavigate()
        useEffect(()=>{
           disptch(fetch_info_personne())
           disptch(fetch_status())
           disptch(fetch_filier())
           disptch(mon_status())
        },[])
        useEffect(()=>{
          setEmail(info?.email_professionnel)
          setTelephone(info?.telephone)
          SetLocal(status_p?.local)
          setType(status_p?.status_id)
          console.log(info)
          console.log(status_p)
        },[info , status_p])

        function update_info(e){
          e.preventDefault()
          const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          };
          const data={
            email_professionnel:email,
            telephone:telephone,
            status_id:type,
            local:local
          }
          console.log(data)
          axios.post(`${Api_base}update_info`,data ,{headers}).then((response)=>{
             if(response.data=="change"){
              disptch(fetch_info_personne())
              setShowSuccessAlert(true)
             }
          })
        }
 
       
  if(loading){
    return(
       <Loading/>
    )
  }

    return(
        <div>
             <Nav_bar/>
             <div>
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
        <Box component="form" onSubmit={update_info}   Validate sx={{width:"50%" ,  '@media (max-width: 600px)': { width: '70%' },}}>
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
          {status?.map((s)=> (
            <MenuItem value={s.id}>{s.type}</MenuItem>
          ))}
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