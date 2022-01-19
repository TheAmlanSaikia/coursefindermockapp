import React from 'react';
import './pagination.css'



function Pagination({dataLength, PostPerPage,Paginate}) {
   const pageNumbers = [];
   const totalPage = (Math.ceil(dataLength/PostPerPage));
   
   for(var i=1; i <= totalPage; i++){
      pageNumbers.push(i);
  }
  


    return ( 
        <div className='PageBar'>
          <ul className='pagination'>
          {pageNumbers.map(number =>(
              <li key ={number} className ='Page-List'>
                <a onClick={() => Paginate(number)} href='!#' 
                className='ClickPage'>
                    {number}
                </a>

              </li>
              
          ))}
         
          </ul>
             
        </div>
     );


}

export default Pagination;


