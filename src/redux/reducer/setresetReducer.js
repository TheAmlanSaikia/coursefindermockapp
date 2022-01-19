import { SET_RESET } from "../types/setresetType"


const intialResetState = {

  resetState: 1,

}


export const setResetreducer = ( state = intialResetState, action ) => {

  switch(action.type) {

   case SET_RESET:
    return {
        ...state,
         resetState: action.payload,
       
    }

    default: return state

  }


}