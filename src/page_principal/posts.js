import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetch_Posts } from "../store/ps"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, CardContent, Typography } from '@mui/material';
import { InputLabel } from '@mui/material';
import Nav_bar from "../Nav_bar";
import Loading from "./loading";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import download from 'downloadjs'
import Api_base from "../api";
import axios from "axios";







function Posts(){
       const loading = useSelector(state=>state.post.loading)
       const posts = useSelector(state=>state.post.posts)
       const [ld,setLd]=useState(false);
       const commonStyles = {
        
        m: 1,
        width: '60%',
        height: 'auto',
      };
      const dispatch =useDispatch()
      useEffect(()=>{
        dispatch(fetch_Posts())
      },[])
        const pdf=async (nom)=>{
          setLd(true)
          const res = await axios.get(`${Api_base}telecharger_pdf/${nom}`,{
              responseType: 'blob', 
          }) .then(response => {
              const content = response.headers['content-type'];
              download(response.data, nom, content)
              setLd(false)
           })
           .catch(error => console.log(error));
       }
      




     if(loading || ld){
      return(
       <Loading/>
      )
     }
    return(
      <div id="posts">
         <Nav_bar/>
        <div>
        {
                posts?.map((p)=>(
                    <Box sx={{ ...commonStyles, borderRadius: '16px', marginLeft:"20%" , boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)','@media (max-width: 600px)': {margin:"0%" , width:"100%"}}} >
                    <CardContent >
                    <Typography variant="h4" component="div" sx={{textAlign:"center" , borderRadius: '16px', textTransform: "capitalize", color:"white" , background:"black"}}>
                      {p.titre}
                    </Typography>
                    <Typography   sx={{marginTop:"20px"}}>
                       <b>Type :</b>   {p.type}
                    </Typography>
                    <Typography  sx={{marginTop:"20px"}}>
                    <b> Description : </b>  {p.desc}
                    </Typography>
                    <Typography  sx={{marginTop:"20px"}}>
                    <b>info :</b> {p.info}
                    </Typography>
                   {p.url_fichier &&
                     <Button variant="outlined" 
                      sx={{ marginTop:"20px" , marginLeft:"70%" , width:"25%" , color:"green" , borderColor:"green"  ,  "&:hover": {borderColor: "green",} ,'@media (max-width: 600px)': {marginLeft:"20%" , width:"60%"}}}
                      onClick={()=>{pdf(p.url_fichier)}}
                      >
                    <FileDownloadIcon/> Telecharger <PictureAsPdfIcon/>
                    </Button>}
                  </CardContent>
                  </Box>
                ))
            }
          
        </div>

      </div>  
    )
}


export default Posts