import { NO_OF_COURSES } from "../types/noofcoursesType";


function numberofcourses(DataCardslength){
  
    return {
        type: NO_OF_COURSES,
        payload:DataCardslength,
    }
}

export default numberofcourses;