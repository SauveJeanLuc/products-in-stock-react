import { useState } from "react";

const SearchBar = ({filterText, inStockOnly}) => {


    return (
        <div>
            <input type="text" placeholder="Search..." value={filterText}/>
            <p>
                <input type="checkbox" checked={inStockOnly} name="show_product" id="show_product" />
                {console.log("In Stock Only value: "+ inStockOnly)}
                <span> Only show products in stock</span>
            </p>
        </div>
    )
}

export default SearchBar;