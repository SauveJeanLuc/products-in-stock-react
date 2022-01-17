import PropTypes from 'prop-types'

const ProductRecord = ({ product }) => {
    
    return (
        <tr style={product.stocked && {color: 'red'}}>
            <td>{ product.name }</td>
            <td>{ product.price }</td>
        </tr>
    )

}

ProductRecord.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.bool,
}

export default ProductRecord;