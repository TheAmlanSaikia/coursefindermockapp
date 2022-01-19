import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cardtwo from "./card2";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import numberofcourses from "./redux/action/noofcoursesAction";

function CardData() {
  const [Data, setData] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PostPerPage] = useState(6);

  //For getting state values from reducer
  const getInputCoursevalue = useSelector(
    (state) => state.coursevalue.coursevalueData
  );
  const getInputChildSubjectvalue = useSelector(
    (state) => state.childsubjectvalue.childsubjectData
  );
  const getInputDatevalueOf = useSelector((state) => state.datevalue.dateData);

  const getInputCheckboxvalue = useSelector(
    (state) => state.checkboxvalue.selfpacedData
  );

  const dispatch = useDispatch();

  //For getting array list form API

  useEffect(() => {
    axios
      .get("https://nut-case.s3.amazonaws.com/coursessc.json")
      .then((res) => {
        const dataSet = res.data;
        const realData = dataSet.filter((value, index) => index < 501);
        setData(realData);
      });
  }, []);

  // For showing the filtered cards from the Data set

  useEffect(() => {
    if (Data) {
      let arrayBox = Data.filter((eachCard) => {
        if (
          eachCard["Course Name"]
            .toLowerCase()
            .includes(getInputCoursevalue.toLowerCase())
        ) {
          return true;
        }
        return false;
      })
        .filter((eachCard) => {
          if (
            eachCard["Child Subject"]
              .toLowerCase()
              .includes(getInputChildSubjectvalue.toLowerCase())
          ) {
            return true;
          }
          return false;
        })
        .filter((eachCard) => {
          if (getInputDatevalueOf === "Invalid date") {
            return true;
          } else if (
            eachCard["Next Session Date"]
              .replace("th", "")
              .replace("st", "")
              .replace("nd", "")
              .replace(",", "")
              .toLowerCase()
              .split(" ")
              .join("") ===
            getInputDatevalueOf.toLowerCase().split(" ").join("")
          ) {
            return true;
          }
          return false;
        })
        .filter((eachCard) => {
          if (getInputCheckboxvalue === false) {
            return true;
          } else if (
            eachCard["Next Session Date"].toLowerCase().split(" ").join("") ===
              "selfpaced" &&
            getInputCheckboxvalue === true
          ) {
            return true;
          }
          return false;
        });

      setData(arrayBox);
      
    }
  }, [
    getInputCoursevalue,
    getInputChildSubjectvalue,
    getInputDatevalueOf,
    getInputCheckboxvalue,
  ]);

  //For getting 6 posts per page, we find the index of first and last post per page

  const indexOfLastPost = CurrentPage * PostPerPage;
  const indexOfFirstPost = indexOfLastPost - PostPerPage;
  const DataPerPage = Data && Data.slice(indexOfFirstPost, indexOfLastPost);

  if(Data){
    dispatch( numberofcourses(Data.length));
  }

  // console.log(Data && Data.length);
  // Change page
  const Paginate = (event, value) => setCurrentPage(value);

  return (
    <React.Fragment>
      <Cardtwo data={DataPerPage} />
      {Data && (
        <Pagination
          count={Math.ceil(Data.length / PostPerPage)}
          onChange={Paginate}
          variant='outlined'
          color='secondary'
          style={{
            margin: "2em 0 2em 0",
            padding: "1em 0 1em 0",
            display: "inline-block",
            
          }}
        />
      )}
    </React.Fragment>
  );
}

export default CardData;
