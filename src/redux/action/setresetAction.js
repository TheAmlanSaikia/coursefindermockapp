import { SET_RESET } from "../types/setresetType";


function resetApp(counterValue){
    
    return{
        type: SET_RESET,
        payload:counterValue,
    }
}

export default resetApp;