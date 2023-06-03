import { Route, Routes } from "react-router-dom";
import N_post from "./Admin/N_post";
import Profil_admin from "./Admin/profil_admin";
import Nav_bar from "./Nav_bar";
import SignIn from "./login/Sign_in";
import Accueil from "./page_principal/Accueil";
import Info_user from "./page_principal/info_user";
import Pass_oublie from "./login/pass_oublie";
import Profile_user from "./page_principal/Profile_user";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Token_storage } from "./store/profil";
import { fetch_Posts, fetch_filiers } from "./store/ps";
import Posts from "./page_principal/posts";
import Loading from "./page_principal/loading";



function App() {
  const token= useSelector(state=>state.profil.tokens)
  const isAuthenticated = token !== null;
  const dispatch= useDispatch()
  useEffect(()=>{
     dispatch(Token_storage())
     // dispatch(fetch_filiers())

  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="profile_admin" element={<Profil_admin/>}/>
        <Route path="profile_user" element={isAuthenticated ?<Profile_user/> : <SignIn/>}  />
        <Route path="new post" element={<N_post/>}/>
        <Route path="login" element={<SignIn/>} />
        <Route path="/posts" element={isAuthenticated ? <Posts/> : <SignIn/>}/>
        <Route path="recuper password" element={<Pass_oublie/>} />
        <Route path="loading" element={<Loading/>} />
      </Routes>
    </div>
  );
}

export default App;
