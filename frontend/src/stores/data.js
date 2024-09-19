import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const response = await axios.post('/'); 
const responseData = response.data.message


const initialState = {
   data: responseData
}

const allDataProcess = createSlice({ // createSlice is a function that takes an object as an argument
    name: 'allDataProcess',
    initialState,
    reducers: {
        addData: (state, {payload}) => {
            state.data = [...state.data, payload];
        },
        deleteData: (state, {payload}) => {
            state.data = state.data.filter(item => item._id !== payload); // filter out the item with the id that matches the payload
        },
        editData: (state, {payload}) => {
            let newData = state.data.map(item => item._id === payload._id ? payload : item); // if the id of the item matches the id of the payload, return the payload, otherwise return the item
            state.data = newData; 
        },
        searchData: (state, {payload}) => {
            let newData = responseData.filter(item => item.text.toLowerCase().startsWith(payload.toLowerCase())); // filter out the item with the title that includes the payload
            state.data = newData;
        }
    }
});

export const {addData, deleteData, editData, searchData } = allDataProcess.actions;
export default allDataProcess.reducer;