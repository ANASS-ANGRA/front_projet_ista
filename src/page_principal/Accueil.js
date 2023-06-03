import Nav_bar from "../Nav_bar"
import "../style/accueil.css"




function Accueil(){
    return(
        <div>
            <Nav_bar/>
        <div id="Accueill">
          <p id="text_accueil">Bienvenue sur notre plateforme de stages ! Trouvez des opportunités passionnantes pour débuter votre carrière. Nous regroupons des offres de stages de différents secteurs et tailles d'entreprises. La navigation est simple grâce à notre moteur de recherche avancé et nos outils de candidature efficaces. Les offres sont accompagnées de descriptions détaillées. Nous mettons tout en œuvre pour faciliter votre intégration et vous accompagner tout au long de votre expérience. Explorez dès maintenant les offres disponibles et lancez votre aventure professionnelle !<br></br>
L'équipe de notre plateforme de stages</p>
     <img src="https://www.ofppt.ma/sites/default/files/home/photo-ofppt.png" id="image_accueil"/>
        </div>
        </div>
    )
}

export default Accueil