import React from "react";
import "./header.css";
import FilterSearch from "./filter";
import { useSelector } from "react-redux";

function HeaderComponent() {
 
 const NumberOfCards = useSelector(state => state.numberofcardstodisplay.numberOfcards );

  return (
    <nav className='headerMenu'>
      <div className='nav-brand'>
        <h1>Course Finder</h1>
      </div>
      <div className='nav-small'>
        <h4>Course Found:{NumberOfCards}</h4>
      </div>

      <FilterSearch />
    </nav>
  );
}

export default HeaderComponent;
