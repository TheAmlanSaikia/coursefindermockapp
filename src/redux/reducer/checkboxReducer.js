import { CHECKBOX_VALUE } from "../types/checkboxType"

const initialState = {
    coursevalueData: "",
    childsubjectData:"",
    dateData: "",
    selfpacedData:false

}



export const checkboxreducer = (state = initialState, action) => {

   switch(action.type){

       case CHECKBOX_VALUE:

       return{
           ...state,
           selfpacedData: action.payload
       }

       default: return state
   }


}