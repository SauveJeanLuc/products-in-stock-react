import ProductRecord from './ProductsTable';
import ProductCategoryRow from './ProductCategoryRow';

const ProductsTable = () => {

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>  
            {/* {<ProductCategoryRow />}
            {<ProductRecord />} */}
        </table>
    )

}

export default ProductsTable;