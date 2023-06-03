
import React ,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import { createTheme, ThemeProvider } from '@mui/material/styles';




const theme = createTheme();
 function Pass_oublie(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function validateEmail() {
    // This regular expression checks if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      alert("Please enter a valid email address");
    } else {
      setEmailError('');
    }
  }



  const handleSubmit = (event) => {
        event.preventDefault()
       validateEmail()
  }

  return(
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop:"40%"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <EmailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Email
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} Validate sx={{width:"100%"}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              helperText={emailError && emailError}
            />
      
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>

            {emailError &&    <Grid container>
              <Grid item xs>
                  {emailError}

              </Grid>
            </Grid>}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
  )
 }


   export default Pass_oublie