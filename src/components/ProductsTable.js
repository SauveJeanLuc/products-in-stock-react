import ProductRecord from './ProductRecord';
import ProductCategoryRow from './ProductCategoryRow';

const ProductsTable = () => {

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>  
            <ProductCategoryRow text ={'Sporting Goods'} />
            <ProductRecord name='Football' price='$49.99' />
            <ProductRecord name='Baseball' price='$9.99' />
            <ProductRecord name='Basketball' price='$29.99' stocked = {true} />
            <ProductCategoryRow text ={'Electronics'} />
            <ProductRecord name='iPod Touch' price='$99.99' />
            <ProductRecord name='iPhone 5' price='$399.99' stocked = {true} />
            <ProductRecord name='Nexus 7' price='$199.99'/>
        </table>
    )

}

export default ProductsTable;