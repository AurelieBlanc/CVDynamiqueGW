import "./NewLife.scss"; 
import { useSelector, useDispatch } from 'react-redux';


export default function NewLife () {

    const dispatch = useDispatch(); 
    

    return (
        <div className="newLife">
            <button className="newLife_button" 
           
            >Mes épopées professionnelles</button>
            
        
        <div className="expPro">

            <div className="column1">
                <h2 className="expPro_h2">Gérante et associée chez Pom&Cub, entreprise de textiles et d'objets de communication </h2>
                    <ul className="expPro_ul">
                        <li><span className="years">Années: 2012 et 2013</span></li>
                        <li>Gestion fournisseurs, Facturation clients</li>
                        <li>Adminisatration des ventes</li>
                        <li>Mise en place d'un ERP de gestion</li>
                        <li>Graphisme</li>
                    </ul> 

                <h2 className="expPro_h2">Assistante commerciale et Achats chez Dimo Alpes</h2>
                    <ul className="expPro_ul">
                        <li><span className="years">Années: 2012 et 2013</span></li>
                        <li>Interlocutrice des commerciaux et des fournisseurs</li>
                        <li>Responsable d'un site marchand pour un client grand compte: animation commerciale pour la mise en place d'achatbgroupé, newsletter, amelioration du site, interlocutrice clients mails ou appels entrants, assistance pour le site (mot de passe, passtion de commande, etc)</li>
                        <li>Sourcing, recherche de nouveaux fournisseurs</li>
                    </ul> 

                <h2>Séjour en Nouvelle Zalande dans un collège international pour se perfectionner en anglais</h2>
                    <ul className="expPro_ul">
                        <li><span className="years">Année: 2013</span></li>
                    </ul>
                

                


                <h2 className="expPro_h2">Assistante commerciale et administrative à Snowleader, site de ventes de materiel de sports outdoors</h2>
                    <ul className="expPro_ul">
                        <li><span className="years">Années: 2012 et 2013</span></li>
                        <li>Gestion des clients en B to C (clients particuliers)</li>
                        <li>Gestion des stocks informatiques</li>
                        <li>Seconder le chef produit rayon escalade</li>
                        <li>Gestion du Service Après-vente</li>
                        <li>Gestion administrative</li>
                    </ul>
            </div>


            <div className="column2">
                <h2 className="expPro_h2">Assistante commerciale et administrative à la banque populaire des Alpes</h2>
                    <ul className="expPro_ul">
                        <li><span className="years">Années: 2010 et 2011</span></li>
                        <li>Gestion du guichet, accueil clientèle, opérations bancaires</li>
                        <li>Gestion des procédures de sécurité de l'agence et de transferts de fond</li>
                        <li>Gestion des distributeurs de billets</li>
                    </ul> 


                <h2 className="expPro_h2">BTS MUC: Management des Unités Commerciales</h2>
                    <ul className="expPro_ul">
                        <li><span className="years">Années: 2007 / 2009</span></li>
                        <li>en alternance chez Jeans Universe</li>
                    </ul> 

                

                <h2 className="expPro_h2 years">FORMATIONS :</h2>
                    <ul className="expPro_ul">
                        <li>BACCALAUREAT SCIENTIFIQUE</li>
                        <li>GESTION Des ENTREPRISES et des ADMINISTRATIONS</li>
                    </ul> 


            </div>   
            
             
            </div>
        </div>
    )
}