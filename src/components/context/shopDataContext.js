import React, { useReducer } from 'react';
import createDataContext from './createDataContext'



const shopReducer = (state,action) => {
    switch (action.type){
        case 'addto_cart':
            return state.map((blogPost)=> {
                return blogPost.id === action.payload.id 
                ? action.payload
                : blogPost;
            });
        case 'edit_selection':
            return state.filter((blogPost) => blogPost.id !== action.payload);    
        case 'add_blogpost':
            return [
                ...state, 
                {
                  id: Math.floor(Math.random() * 99999), 
                  title: action.payload.title,
                  content: action.payload.content
                }
            ];
        default:
            return state;
    }
};

//payload----Infofrom selectedItem-----------------------------------
const addToCart = (dispatch) => {
    return (id) => {
        dispatch({ type: 'addto_cart', payload: { url, itemnumber}})
    }
}


const editSelection = (dispatch) => {
    return () => {
        dispatch({ type: 'edit_selection', payload: { url,itemnumber }})
        if(callback){
            callback();
        }
    }
}



export const { Context, Provider } = createDataContext(
    shopReducer,
   { addToCart, editSelection })