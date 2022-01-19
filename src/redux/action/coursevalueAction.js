import { COURSE_VALUE } from "../types/coursevalueTypes";

function courseValue(inputCourseValue){
    

    return{
        type: COURSE_VALUE,
        payload: inputCourseValue
    }
}

export default courseValue;