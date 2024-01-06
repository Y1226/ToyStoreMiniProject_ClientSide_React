import produce from 'immer'

const SalesState = {
    SalesList: []
}

const SalesReducer = produce(
    (state, action) => {

    }, SalesState
)

export default SalesReducer