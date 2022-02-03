import { useState } from "react";

const SearchBar = ({filterText, inStockOnly}) => {
    const [handleFilterTextChange, setHandleFilterTextChange] = useState[this.handleFilterTextChange.bind(this)];
    const [handleInStockChange, setHandleInStockChange] = useState[this.handleInStockChange.bind(this)];

    function handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
      }
      
    function handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

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