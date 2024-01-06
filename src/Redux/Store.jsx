import { combineReducers, createStore } from "redux"
import CartReducer from "./Reducers/CartReducer"
import CategoryReducer from "./Reducers/CategoryReducer"
import ProductReducer from "./Reducers/ProductReducer"
import SaleDetailsReducer from "./Reducers/SaleDetailsReducer"
import SalesReducer from "./Reducers/SalesReducer"
import UserReducer from "./Reducers/UserReducer"

//reducers used in this project
const reducers = combineReducers({
    CartReducer,
    CategoryReducer,
    ProductReducer,
    SaleDetailsReducer,
    SalesReducer,
    UserReducer
})

const store = createStore(reducers)
window.store = store

export default store


