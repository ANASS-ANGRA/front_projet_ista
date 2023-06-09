import React ,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Api_base from '../api';
import { useDispatch } from 'react-redux';
import { Token_s } from '../store/profil';





const theme = createTheme();

export default function SignIn() {
   

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const disptche= useDispatch()
  const Nav= useNavigate()

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

  function validatePassword() {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      alert('Password must be at least 8 characters long')
    } else {
      setPasswordError('');
    }
  }


  const handleSubmit = (event) => {
        event.preventDefault()
       validateEmail()
       validatePassword()
       if (!emailError && !passwordError) {
        const data={
           email:email,
           password:password
         } 
         axios.post(`${Api_base}login`,data).then((Response)=>{
          if(Response.data.message=="connected"){
            disptche(Token_s(Response.data.token))
            localStorage.setItem('token',Response.data.token);
            Nav("/")
         }else if(Response.data.message=="password incorrect"){
           setPasswordError(Response.data.message)
         }else if(Response.data.message=="email incorrect") {
            setEmailError("email incorrect")
         }
        })

        }
  }
 
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
  
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              helperText={passwordError && passwordError}
            />
      
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/recuper password" style={{ color: 'blue' }}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
        }