const SearchBar = () => {
    return (
        <div>
            <input type="text" placeholder="Search..." />
            <p>
                <input type="checkbox" name="show_product" id="show_product" />
                <span> Only show products in stock</span>
            </p>
        </div>
    )
}

export default SearchBar;