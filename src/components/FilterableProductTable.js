import SearchBar from "./SearchBar";
import ProductsTable from "./ProductsTable";
const FilterableProductTable = ({products}) => {
    return (
        <>
            <SearchBar />
            <ProductsTable products={products}/>
        </>
    )
} 

export default FilterableProductTable;