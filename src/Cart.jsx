import React from "react";


function Cart({selectedProducts}) {
  
  return (
    <div className="top-10 right-10 w-96 h-80">
      <div className="bg-indigo-100 p-6 rounded shadow-md h-full overflow-y-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Cart</h2>
    <ul className="text-black">
      {selectedProducts.map((product)=>(
        <li key={product.id} className=" flex items-center justify-between mb-4 ">{product.name}</li>
      )
      )}
    
    </ul>
  


    
      </div>


    </div>
    
  );
}


export default Cart;
