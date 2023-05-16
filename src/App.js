import N_post from "./Admin/N_post";
import Profil_admin from "./Admin/profil_admin";
import Nav_bar from "./Nav_bar";
import SignIn from "./login/Sign_in";
import Oublie from "./login/pass_oublie";
import Accueil from "./page_principal/Accueil";
import Info_user from "./page_principal/info_user";


function App() {
  return (
    <div className="App">
      <Nav_bar/>
      <Profil_admin/>
    </div>
  );
}

export default App;
