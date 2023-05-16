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
import { useState } from "react";


function Profil_admin(){

      const post=[
        {
            title:"test",
            desc:"test test test test test test test test test",
            Info:"test:abc test test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test test",
            type:"offre d'emploi"
        },
        {
            title:"test",
            desc:"test test test test test test test test test",
            Info:"test:abc test test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test test",
            type:"offre d'emploi"
        },
        {
            title:"test",
            desc:"test test test test test test test test test",
            Info:"test:abc test test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test test",
            type:"offre d'emploi"
        },
        {
            title:"test",
            desc:"test test test test test test test test test",
            Info:"test:abc test test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test test",
            type:"offre d'emploi"
        },
        {
            title:"test",
            desc:"test test test test test test test test test",
            Info:"test:abc test test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test test",
            type:"offre d'emploi"
        },
        {
            title:"test",
            desc:"test test test test test test test test test",
            Info:"test:abc test test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test test",
            type:"offre d'emploi"
        },
        {
            title:"test",
            desc:"test test test test test test test test test",
            Info:"test:abc test test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test test",
            type:"offre d'emploi"
        },
        {
            title:"test",
            desc:"test test test test test test test test test",
            Info:"test:abc test test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test test",
            type:"offre d'emploi"
        },
        {
            title:"test",
            desc:"test test test test test test test test test",
            Info:"test:abc test test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test testtest test test",
            type:"offre d'emploi"
        }
    ]
    const commonStyles = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: 'auto',
        height: 'auto',
      };
      const [open, setOpen]=useState(false);
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };



    return(
        <div id="profile_admin">
            <Info_user/>


            <div id="post_admin">
                <div id="button_profil">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ width:"40%", backgroundColor:"black"}}
             >
               suivi stagaire
          </Button>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{marginLeft:"10%", width:"40%", backgroundColor:"black"}}
             >
               ajouter post
          </Button>
          </div>
          <div id="post_admin_">
            {
                post?.map((p)=>(
                    <Box sx={{ ...commonStyles, borderRadius: '16px' }} >
                    <CardContent>
                 
                    <Typography variant="h5" component="div">
                      {p.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {p.desc}
                    </Typography>
                    <Typography variant="body2">
                      {p.Info}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       {p.type}
                    </Typography>
                    <Button variant="outlined" onClick={handleClickOpen} sx={{color:"red" ,borderColor:"red"}} startIcon={<DeleteIcon />}>
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
          <Button onClick={handleClose} sx={{color:"Green" }} autoFocus>
            Oui
          </Button>
        </DialogActions>
      </Dialog>
            
          </div>
            </div>
        </div>
    )
}

export default Profil_admin