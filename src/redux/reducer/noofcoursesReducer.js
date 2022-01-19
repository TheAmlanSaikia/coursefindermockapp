import { NO_OF_COURSES } from "../types/noofcoursesType";

const initialstate = {
  
    numberOfcards: 0,

}


export const numberofcoursesreducer = ( state = initialstate, action ) => {
  
    switch(action.type){

        case NO_OF_COURSES:

            return {
                ...state,
                numberOfcards: action.payload,
            }
        
        default: return state;
    }


}

