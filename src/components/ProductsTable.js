import ProductRecord from './ProductRecord';
import ProductCategoryRow from './ProductCategoryRow';

const ProductsTable = ({products}) => {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
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