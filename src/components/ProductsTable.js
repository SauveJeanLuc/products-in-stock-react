import ProductRecord from './ProductRecord';
import ProductCategoryRow from './ProductCategoryRow';

const ProductsTable = ({products, filterText, inStockOnly}) => {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
            return;
        }
        if(inStockOnly && !product.stocked){
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow text={product.category} key={product.category} />
            );
        }
        rows.push(
            <ProductRecord product={product} key={product.name} />
        )
        lastCategory = product.category;
    });


    return (
        <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )

}

export default ProductsTable;