import React from "react";
import "./card.css";



function  Cardtwo({data}){
    return (
     <React.Fragment>   
      {data &&
        data.map((res) => (
          <div className='Course-Box' key={res["Course Id"]}>
            <div className='card-component'>
              <div className='course-card' onClick={(e) => {
                  window.open(res.Url, '_blank');
              }}>
                <div className='card-number'>
                  <ul>
                    <li className='List-Items'>{res["Course Id"]}</li>
                  </ul>
                  <p>{res["Next Session Date"]}</p>
                </div>
                <div className='provider-name'>
                  Provider:
                  <div className='provider-data'>{res.Provider}</div>
                </div>
                <div className='course-name'>
                  Coursename:
                  <div className='course-data'>{res["Course Name"]}</div>
                </div>
                <div className='subject'>
                  <div className='parent-subject'>
                    Parent-Subject:
                    <div className='parent-subject-data'>
                      {res["Parent Subject"]}{" "}
                    </div>
                  </div>
                  <div className='child-subject'>
                    Child-Subject:{" "}
                    <div className='child-subject-data'>
                      {res["Child Subject"]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </React.Fragment>
    )
}


export default Cardtwo;



// "window.location.href = 'res.Video(Url)';" 