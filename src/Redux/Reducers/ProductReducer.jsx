import produce from 'immer'

const ProductState = {
    ProductList: []
}

const ProductReducer = produce(
    (state, action) => {
        switch (action.type) {
            case 'Show-Products':
                state.ProductList = action.payload
                break;
        
            default:
                break;
        }
    }, ProductState
)

export default ProductReducer