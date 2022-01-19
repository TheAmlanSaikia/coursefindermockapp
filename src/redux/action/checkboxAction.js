import { CHECKBOX_VALUE } from "../types/checkboxType";


function checkboxValue(isChecked){
    return{

        type: CHECKBOX_VALUE,
        payload: isChecked,
    }
}

export default checkboxValue;