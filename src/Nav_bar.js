import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Nav_bar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const utilisateur = useSelector(state=>state.profil?.info_p?.utilisateur)
  const admin = utilisateur == "admin"
  const user = utilisateur !== "admin"

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',}}>
      <Typography variant="h6" sx={{ my: 2 ,color:"black"}}>
        MUI
      </Typography>
      <Divider />
      <List >
        <Link to="/">
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' , color:"black" }}>
               <HomeIcon/>
              <ListItemText primary="Accueil" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/posts">
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' , color:"black" }}>
            <MailOutlineIcon/>
              <ListItemText primary=" Posts" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/new post">
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' , color:"black" }}>
            <PostAddIcon/>
              <ListItemText primary="new post" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/profile_user">
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' , color:"black" }}>
            <AccountCircle/>
              <ListItemText primary="Profil" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  sx={{ display: 'flex' ,  }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } , backgroundColor: "black"}}>
            
             <Link to="/">
                <Button  sx={{ color: '#fff' }}><HomeIcon/>Accueil</Button>
            </Link>
            <Link to="/posts">
            <Button sx={{ color: '#fff' }}><MailOutlineIcon/> Posts</Button>
        
            </Link>
            {
              admin &&
              <>
              <Link to="/new post">
            <Button sx={{ color: '#fff' }}><PostAddIcon/> new post</Button>
            </Link>
            <Link>
            <Button sx={{ color: '#fff' }}><GroupsIcon/> suivi </Button>
            </Link>
              <Link to="/profile_admin">
              <Button sx={{ color: '#fff' }}><AccountCircle/> Profil</Button>
              </Link>
              </>
            }
            {
              user &&
            <Link to="/profile_user">
            <Button sx={{ color: '#fff' }}><AccountCircle/> Profil</Button>
            </Link>
            }
            
         
           
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
