import { DATE_VALUE } from "../types/datevalueType"


const initialState = {
    coursevalueData:"",
    childsubjectData:"",
    dateData:"",
    selfpacedData:false,

}



export const datevaluereducer = (state = initialState, action) => {
  
    switch(action.type){

        case DATE_VALUE: 
        
        return {
            ...state,
            dateData: action.payload, 
           
        }

        default: return state
    }
   
}
