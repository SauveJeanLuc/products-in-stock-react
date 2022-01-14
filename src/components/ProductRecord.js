import PropTypes from 'prop-types'

const ProductRecord = ({ name, price, stocked }) => {
    
    return (
        <tr style={stocked && {color: 'red'}}>
            <td>{ name }</td>
            <td>{ price }</td>
        </tr>
    )

}

ProductRecord.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.bool,
}

export default ProductRecord;