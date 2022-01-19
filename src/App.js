import React, { useEffect, useState } from "react";
import "./App.css";
import HeaderComponent from "./header";
import CourseContainer from "./coursecontainer";
import { useSelector } from "react-redux";

function App() {

  const [ forReset, setforReset] = useState(0);

  const resetValue = useSelector((state) => (state.setResetvalue.resetState) ) 
   
  useEffect(()=> {

    setforReset(resetValue.toString())
    console.log(forReset)

  },[resetValue])


  

  return (
    <div className='App' key={forReset}>
      <HeaderComponent />
      <CourseContainer />
    </div>
  );
}

export default App;
