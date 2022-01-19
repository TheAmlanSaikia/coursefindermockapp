import { DATE_VALUE } from "../types/datevalueType";



function dateValue(dateInputValue){
  
    return{

      type: DATE_VALUE,
      payload: dateInputValue,
    
    }
}

export default dateValue;