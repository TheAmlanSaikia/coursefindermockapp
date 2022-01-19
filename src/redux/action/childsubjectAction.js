import { CHILDSUBJECT_VALUE } from "../types/childsubjectTypes";


function childSubjectValue(inputchildSubjectValue){
    
    return{
        type: CHILDSUBJECT_VALUE,
        payload: inputchildSubjectValue,
    }
}

export default childSubjectValue;