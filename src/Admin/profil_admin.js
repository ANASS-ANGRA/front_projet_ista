import Info_user from "../page_principal/info_user";
import { Button } from '@mui/material';
import"../style/profil_admin.css"
import { Info } from "@mui/icons-material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from "react";
import Nav_bar from "../Nav_bar";
import { useDispatch, useSelector } from "react-redux";
import { fetch_info_personne, fetch_mes_posts } from "../store/profil";
import Loading from "../page_principal/loading";
import axios from "axios";
import Api_base from "../api";
import { Stack, Alert } from '@mui/material';


function Profil_admin(){
     const loading = useSelector(state => state.profil.loading)
     const post = useSelector(state => state.profil.mes_posts)
     const [id_post,setId_post]=useState()
     const [showSuccessAlert , setShowSuccessAlert]=useState(false)
     const [shownoAlert ,setShownoAlert]=useState(false)
      const dispatch =useDispatch()

      useEffect(()=>{
          dispatch(fetch_info_personne())
          dispatch(fetch_mes_posts())
      },[])


    const commonStyles = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: 'auto',
        height: 'auto',
      };
      const [open, setOpen]=useState(false);
      const handleClickOpen = (id) => {
        setOpen(true);
        setId_post(id)
      };
    
      const handleClose = () => {
        setOpen(false);
      };
     
      function delete_post(){
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
        axios.get(`${Api_base}delete_post/${id_post}`,{headers}).then((response)=>{
            if(response.data=="post delete"){
              dispatch(fetch_mes_posts())
              setShowSuccessAlert(true)
              setId_post(null)
              handleClose()
            }else{
                 setShownoAlert(true)
                 setId_post(null)
                 handleClose()
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
        <div id="profile_admin">
            <Info_user/>
            <div id="post_admin">
                <div id="button_profil">
          </div>
          <div id="post_admin_">
          {  
        showSuccessAlert &&
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">le post supprimer </Alert>
        </Stack>
         }
         {
          shownoAlert &&
            <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">le post ne pas supprimer </Alert>
        </Stack>
         }
            {
                post?.map((p)=>(
                    <Box sx={{ ...commonStyles, borderRadius: '16px'}} >
                    <CardContent>
                 
                    <Typography variant="h5" component="div">
                      {p.titre}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {p.desc}
                    </Typography>
                    <Typography variant="body2">
                      {p.info}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       {p.type}
                    </Typography>
                    <Button variant="outlined" onClick={()=>{handleClickOpen(p.id)}} sx={{color:"red" ,borderColor:"red"}} startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </CardContent>
                  </Box>
                ))
            }
        

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"suprimer post ? "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Es-tu sur de vouloir supprimer cette annonce
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{color:"black" }}>Annuler</Button>
          <Button onClick={delete_post} sx={{color:"Green" }} autoFocus>
            Oui
          </Button>
        </DialogActions>
      </Dialog>
            
          </div>
            </div>
        </div>
        </div>
    )
}

export default Profil_admin