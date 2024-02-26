import { createSlice } from '@reduxjs/toolkit'; 

export const initialState = {
    bannerImg: "un", 
    monAncienneVie: false, 
    maNouvelleVie: false, 
    mesConvictions: false, 
}

const dynamicSlice = createSlice({
    name: "dynamic", 
    initialState, 
    reducers: {
        updateBannerImage: (state, action) => {
            return {
                ...state, 
                bannerImg: action.payload
            }
        }, 
    
        updateMonAncienneVieButton: (state, action) => {
            return {
                ...state, 
                monAncienneVie: action.payload
            }
        }, 
        updateMaNouvelleVieButton: (state, action) => { 
            return {
                ...state, 
                maNouvelleVie: action.payload
            }
        }, 
        updateMesConvictionsButton: (state, action) => {
            return {
                ...state, 
                mesConvictions: action.payload
            }
        }, 


    }
}); 

export const { updateBannerImage, updateMonAncienneVieButton, updateMaNouvelleVieButton, updateMesConvictionsButton } = dynamicSlice.actions; 

export default dynamicSlice.reducer; 