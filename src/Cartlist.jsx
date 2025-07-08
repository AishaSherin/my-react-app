import React from "react";


function Cartlist({heading}) {
  
  return (
    <div className="top-10 right-10 w-96 h-80">
      <div className="bg-indigo-100 p-6 rounded shadow-md h-full overflow-y-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Cart List</h2>
    <ul className="text-black">
      <li>{heading}</li>
    </ul>
  


    
      </div>


    </div>
    
  );
}


export default Cartlist;
