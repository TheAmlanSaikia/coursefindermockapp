import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./filter.css";
import moment from "moment";
import childSubjectValue from "./redux/action/childsubjectAction";
import courseValue from "./redux/action/coursevalueAction";
import dateValue from "./redux/action/datevalueAction";
import checkboxValue from "./redux/action/checkboxAction";
import resetApp from "./redux/action/setresetAction";

function FilterSearch() {
  const [inputCourseValue, setinputCourseValue] = useState("");
  const [inputchildSubjectValue, setinputchildSubjectValue] = useState("");
  const [dateInputValue, setdateInputValue] = useState("");
  const [isChecked, setisChecked] = useState(false);
  const [counterValue, setcounterValue] = useState(0);

  const handleOnChange = () => {
    setisChecked(!isChecked);
  };
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(courseValue(inputCourseValue));
    dispatch(childSubjectValue(inputchildSubjectValue));
    dispatch(
      dateValue(moment(dateInputValue, "YYYY/MM/DD").format("D MMM YYYY"))
    );
    dispatch(checkboxValue(isChecked));
  };

  const onClickResetHandler = () => {
    
   setcounterValue(counterValue + 1);
   
  };

  useEffect(()=>{

    dispatch(resetApp(counterValue));

  },[counterValue])
  

  // useEffect(()=>{

  //   dispatch(coursevalue(inputCourseValue))

  // },[inputCourseValue])

  return (
    <div className='mainsecondheader'>
      <div className='secondheader'>
        <div className='OuterInputText'>
          <input
            type='text'
            className='inputText filterBar'
            placeholder='Course-Name'
            value={inputCourseValue}
            onChange={(e) => setinputCourseValue(e.target.value)}></input>
        </div>

        <div className='OuterInputText'>
          <input
            type='text'
            className='inputText filterBar'
            placeholder='Child Subject'
            value={inputchildSubjectValue}
            onChange={(e) => setinputchildSubjectValue(e.target.value)}></input>
        </div>

        <div className='OuterInputText'>
          <input
            type='date'
            className='inputText filterBar'
            placeholder='date'
            value={dateInputValue}
            onChange={(e) => setdateInputValue(e.target.value)}></input>
        </div>

        <div className='OuterCheckClass'>
          <label className='labelClass'>
            Self Paced:
            <input
              type='checkbox'
              className='inputCheck filterBar'
              name='checkboxValue'
              onChange={handleOnChange}></input>
          </label>
        </div>

        <div className='OuterButton'>
          <button className='btnClick filterBar' onClick={onClickHandler}>
            Search
          </button>
          <button className='btnClick ResetSet' onClick={onClickResetHandler}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSearch;
