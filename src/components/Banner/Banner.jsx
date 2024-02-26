import './Banner.scss'; 
import { IonIcon } from '@ionic/react';
import { useDispatch, useSelector } from "react-redux"; 
import { updateBannerImage } from "../../store/dynamicSlice"



export default function Banner() {

    const dispatch = useDispatch(); 

    
    function bannerChange(event) {
        event.preventDefault(); 
        const value = event.currentTarget.value; 
        
        let newValue; 
       
        
        if (value==="trois") {
            newValue="un"
        } else if (value==="un") {
            newValue="deux"
        } else {
            newValue="trois"
        }
        
        const action = newValue; 
        dispatch (updateBannerImage(action))
    }

    const stateBanner = useSelector((state)=> state.dynamic.bannerImg); 
     


    return (
        <div className={`banner ${stateBanner}`} >
            
         <button className="bannerButton" onClick={bannerChange} value={stateBanner}>
            <img src="/images/feather.svg" alt="" />
        </button>   
        
            

        </div>
    )
}; 