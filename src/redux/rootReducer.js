import { combineReducers } from "redux";
import { checkboxreducer } from "./reducer/checkboxReducer";
import { childsubjectreducer } from "./reducer/childsubjectReducer";
import coursevalueReducer from "./reducer/coursevalueReducer";
import { datevaluereducer } from "./reducer/datevalueReducer";
import { numberofcoursesreducer } from "./reducer/noofcoursesReducer";
import { setResetreducer } from "./reducer/setresetReducer";


const rootReducer = combineReducers({

    coursevalue: coursevalueReducer,
    childsubjectvalue: childsubjectreducer,
    datevalue: datevaluereducer,
    checkboxvalue: checkboxreducer,
    setResetvalue: setResetreducer,
    numberofcardstodisplay: numberofcoursesreducer,
})



export default rootReducer;