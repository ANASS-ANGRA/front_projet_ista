import N_post from "./Admin/N_post";
import Nav_bar from "./Nav_bar";
import SignIn from "./login/Sign_in";
import Oublie from "./login/pass_oublie";
import Accueil from "./page_principal/Accueil";


function App() {
  return (
    <div className="App">
      <Nav_bar/>
      <Accueil/>
    </div>
  );
}

export default App;
