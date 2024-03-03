import "./ExpPro.scss"; 
import { useSelector, useDispatch } from 'react-redux';
import { updateExperiencesProButton } from "../../store/dynamicSlice";

export default function NewLife () {

    const dispatch = useDispatch(); 
    const experiencesPro = useSelector((state)=>state.dynamic.experiencesPro)
    console.log("exp Pro ", experiencesPro); 

    function experiencesProHandle () {
        const result = !experiencesPro ; 

        const action = updateExperiencesProButton(result); 
        dispatch(action); 
    }

    return (
        <div className="newLife">
            <button className="newLife_button"
            onClick={experiencesProHandle}>
            Ma frise chronologique :</button>
            
        
        <div className= {`expPro ${experiencesPro}`}>

           

            <div className="column1">

            <h2 className="expPro_h2"> Suite à mon "Crash Down"...  </h2>
                    <ul className="expPro_ul">
                        <li><span className="years">Années: 2022 / 2023</span></li>
                        <li>Périple d'examens neupsychologiques</li>
                        <li>Bagarre avec Pôle Emploi pour un financement vers ma nouvelle vie</li>
                        <li>Bataille gagnée</li>
                        <li>Formation developpement Web FullStack JS chez O-Clock</li>
                    </ul> 

                <h2 className="expPro_h2">Gérante et associée chez Pom&Cub, entreprise de textiles et d'objets de communication </h2>
                    <ul className="expPro_ul">
                        <li><span className="years">Années: 2017 à 2021</span></li>
                        <li>Gestion fournisseurs, Facturation clients</li>
                        <li>Administration des ventes</li>
                        <li>Mise en place d'un ERP de gestion</li>
                        <li>Graphisme</li>
                    </ul> 

                <h2 className="expPro_h2">Assistante commerciale et Achats chez Dimo Alpes</h2>
                    <ul className="expPro_ul">
                        <li><span className="years">Années: 2014 à 2017</span></li>
                        <li>Interlocutrice des commerciaux et des fournisseurs</li>
                        <li>Responsable d'un site marchand pour un client grand compte: animation commerciale pour la mise en place d'achat groupé, newsletters, amelioration du site, interlocutrice clients mails ou appels entrants, assistance pour le site (mot de passe, passation de commande, etc)</li>
                        <li>Sourcing, recherche de nouveaux fournisseurs</li>
                    </ul> 

                <h2>Séjour en Nouvelle Zalande dans un collège international pour se perfectionner en anglais</h2>
                    <ul className="expPro_ul">
                        <li><span className="years">Année: 2013</span></li>
                    </ul>
                

                


              
            </div>


            <div className="column2">

                <h2 className="expPro_h2">Assistante commerciale et administrative à Snowleader, site de ventes de materiel de sports outdoors</h2>
                    <ul className="expPro_ul">
                        <li><span className="years">Années: 2011 et 2012</span></li>
                        <li>Gestion des clients en B to C (clients particuliers)</li>
                        <li>Gestion des stocks informatiques</li>
                        <li>Seconder le chef produit du rayon escalade</li>
                        <li>Gestion du Service Après-vente</li>
                        <li>Gestion administrative</li>
                    </ul>
                <h2 className="expPro_h2">Assistante commerciale et administrative à la banque populaire des Alpes</h2>
                    <ul className="expPro_ul">
                        <li><span className="years">Années: 2009 et 2010</span></li>
                        <li>Gestion du guichet, accueil clientèle, opérations bancaires</li>
                        <li>Gestion des procédures de sécurité de l'agence et de transferts de fond</li>
                        <li>Gestion des distributeurs de billets</li>
                    </ul> 


                              

                <h2 className="expPro_h2 years">FORMATIONS :</h2>
                    <ul className="expPro_ul">
                        <li>BTS MUC: Management des Unites commerciales</li>
                        <li>DUT GESTION Des ENTREPRISES et des ADMINISTRATIONS</li>
                        <li>BACCALAUREAT SCIENTIFIQUE</li>
                        </ul> 


            </div>   
            
             
            </div>
        </div>
    )
}