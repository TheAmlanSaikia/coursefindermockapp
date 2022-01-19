import { CHILDSUBJECT_VALUE } from "../types/childsubjectTypes"

const initialState = {
    coursevalueData: "",
    childsubjectData:"",
    dateData:"",
    selfpacedData:false

}



export const childsubjectreducer = (state = initialState, action) => {



    switch(action.type){

        case CHILDSUBJECT_VALUE: 
        
        return {
            ...state,
            childsubjectData: action.payload,
           
        }

        default: return state
    }
   
}

