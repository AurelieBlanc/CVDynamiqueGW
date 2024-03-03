import './AboutMe.scss'; 
import { updateMonAncienneVieButton, updateMaNouvelleVieButton, updateMesConvictionsButton } from '../../store/dynamicSlice'; 
import { useSelector, useDispatch } from 'react-redux'

export default function AboutMe () {

    const dispatch = useDispatch();

    const monAncienneVie = useSelector((state)=>state.dynamic.monAncienneVie); 

    const maNouvelleVie = useSelector((state)=>state.dynamic.maNouvelleVie);
     
    const mesConvictions = useSelector((state)=>state.dynamic.mesConvictions);

    function monAncienneVieHandle() {
        const result = !monAncienneVie; 
        console.log("result :", result); 

        const action = updateMonAncienneVieButton(result); 
        dispatch(action); 
    }

    function maNouvelleVieHandle() {
        const result = !maNouvelleVie; 
        console.log("result :", result); 

        const action = updateMaNouvelleVieButton(result); 
        dispatch(action); 
    }

    function mesConvictionsHandle() {
        const result = !mesConvictions; 
        console.log("result :", result); 

        const action = updateMesConvictionsButton(result); 
        dispatch(action); 
    }
    
    return (
        <div className="aboutMe">
            <h2>Présentation: </h2>
            <button className="buttonAboutMe" onClick={monAncienneVieHandle}>Mon ancienne vie</button>
            <p className={`aboutMeP ${monAncienneVie}`}>Ayant cette très grande appétence pour le visuel, je voulais faire des études d'art / design. Etant découragé par mes parents dans cette voie qu'ils estimaient sans issue et ne connaissant pas l'informatique et ses possibilités à cette époque, je me suis redirigée par dépit et sans grande conviction dans la gestion et le commerce... </p>

                <button className="buttonAboutMe" onClick={maNouvelleVieHandle}>Ma nouvelle vie</button>
            <p className={`aboutMeP ${maNouvelleVie}`}>Malheureusement, ignorant mon syndrome, j'ai enchainé les différents jobs pour plusieurs raisons: intellectuellement parlant je m'ennuyais très vite et le secteur ne convenait pas du tout pour une personne autiste.
            <br />
            Ma dernière experience dans le domaine de la communication fut la plus enrichissante : je travaillais en autonomie, j'organisais et je gérais la société et j'ai également eu l'occasion de travailler avec des développeurs web pour monter notre site web et notre ERP ; c'est là que j'ai commencé à découvrir le monde de l'informatique et sa logique.
            <br />
            J'ai quand meme fini par faire un burn out, conséquence de toutes ses années où j'ai ignoré ce syndrome et où j'ai enchainé métiers et postes non adaptés (trop de sollicitations, bruits, interactions). 
            J'ai sauté sur cette "occasion" pour passer une batterie de tests ; j'ai enfin été diagnostiquée officiellement avec le syndrome d'Asperger. 
            <br />
            J'ai donc pris un virage à 180 degrés et je me suis renseignée sur les métiers adaptés au syndrôme d'Asperger ; le développement web en faisait parti. J'ai testé pendant plusieurs mois en autodidacte et j'ai adoré. La symbiose parfaite : jouer avec du visuel (les interfaces en front-end) mais aussi le coté programmation aussi complexe qu'interessant !
            <br />
            Après des mois de négociations acharnées avec Pole Emploi, j'ai pu intégrer la formation O'clock qui je l'espère me permettra de concretiser cette nouvelle vie enfin en adéquation avec ce que je suis !!!!!
            </p>

            <button className="buttonAboutMe" onClick={mesConvictionsHandle}>Mes convictions</button>
            <p className={`aboutMeP ${mesConvictions}`}>Depuis toute petite je me suis sentie différente. Ayant une sensibilité hors-norme, j'ai tout de suite été connectée à la nature et aux animaux, les considerant comme des êtres vivants et sensibles à part entière. 
            Bien plus sensibles que les êtres humains sans aucun doute... 
            <br />
            Mes parents et grands-parents s'en souviennent encore :  je militais pour la cause animale depuis mon plus jeune âge. Je suis née végétarienne... à leur plus grand dam^^.
            <br />
            La préservation de la nature est dans mes gênes depuis toute petite ; je ne peux faire autrement sinon ce serait renier mes convictions profondes. 
            <br />
            C'est pourquoi je pense incarner pleinement les valeurs de Green Web et de toutes les sociétés qui mettent en avant la préservation du vivant.
            </p>


        </div>
    )
}