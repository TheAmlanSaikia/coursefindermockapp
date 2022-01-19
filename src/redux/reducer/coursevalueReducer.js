import { COURSE_VALUE } from "../types/coursevalueTypes";

const intialState = {
    coursevalueData: "",
    childsubjectData:"",
    dateData:"",
    selfpacedData:false

}



const coursevalueReducer = (state = intialState ,action) => {

    
    switch(action.type){

        case COURSE_VALUE:
            
        return {
            ...state,
            coursevalueData: action.payload,
        }

        default: return state
    }
}

export default coursevalueReducer;