import ProductRecord from './ProductRecord';
import ProductCategoryRow from './ProductCategoryRow';

const ProductsTable = () => {

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>  
            <ProductCategoryRow text ={'Rewind'} />
            <>
                <ProductRecord />
            </>
        </table>
    )

}

export default ProductsTable;