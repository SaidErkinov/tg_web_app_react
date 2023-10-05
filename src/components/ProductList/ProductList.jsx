import React, { Profiler, useState } from "react";
import "./ProductList.css";

const ProductList = () => {
    const = [addItems, setAddedItems] = useState( []);
 
    const onAdd = (product) =>{
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addItems.filter(item => item.id !== product.id)
        }else{
            newItems = [...addItems, product]
        }
        setAddedItems(newItems)
    }   
    
    
    return (
    
    <div className={"list"}>
      {products.map((item) => (
        <ProductList Product={item} onAdd={onAdd} className={"item"} />
      ))}
    </div>
  );
};

export default ProductList;
