import { CreateSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
};

export const navSlice = CreateSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state,action) =>{
            state.origin = action.payload
        },
        setDestination: (state,action) =>{
            state.origin = action.payload
        },
        settravelTimeInformation: (state,action) =>{
            state.origin = action.payload
        },
    },
});


export const { setOrigin, setDestination, settravelTimeInformation} = newSlice.actions;