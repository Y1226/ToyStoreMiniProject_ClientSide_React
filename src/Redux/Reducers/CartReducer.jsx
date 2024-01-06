import produce from 'immer'

const CartState = {
    // ProductId:"",
    // ProductName:"",
    // AmountToBuy:1,
    // Price:0,
    // FinalPrice:0
    CartList:[],
    amount:[]
}

const CartReducer = produce(
    (state, action) => {
        switch (action.type) {
            case 'setCart':
                return {...state, CartList:[...state.CartList, action.payload]}
                // state.CartList = action.payload 
                // break;
            case 'setAmount':
            // {
            //     // action.payload = amount
            //     debugger
            //     const index = state.CartList.findIndex(x => x.productId === action.payload.productId)
            //     const newArr = [...state.CartList]
            //     newArr[index].amount = newArr[index].amount+1
            //     return {
            //         ...state, 
            //         CartList: newArr,
            //     } 
            // }
            return { ...state, amount:[...state.amount, action.payload]}
            // state.CartList = action.payload 
            // break;
            case 'setAmountPlus':
            {
                const index = state.CartList.findIndex(x => x.productId === action.payload.productId)
                const newArr = [...state.amount]
                newArr[index]++
                return {
                    ...state, 
                    amount: newArr,
                } 
            }
            case 'setAmountMinus':
            {
                const index = state.CartList.findIndex(x => x.productId === action.payload.productId)
                const newArr = [...state.amount]
                if(newArr[index]>1)
                    newArr[index]--
                return {
                    ...state, 
                    amount: newArr,
                } 
            }
            case 'removeFromCart':
            {
                // const index = state.CartList.findIndex(x => x.productId === action.payload.productId)
                const cart = []
                const amountList = []
                // state.CartList.map(c => (
                //     {!(c.productId !== action.payload.productId) &&  }
                       
                // ))
                let i = 0
                state.CartList.forEach(element => {
                    debugger
                    if(element.productId !== action.payload.productId) {
                        cart.push(element)
                        amountList.push(state.amount[i])
                        debugger
                    }
                    i++
                });
                return {
                    ...state,
                    CartList: cart, 
                    amount: amountList,
                } 
            }
            // case 'setProductId':
            //     state.ProductId = action.payload
            //     break;
            // case 'setProductName':
            //     state.ProductName = action.payload
            //     break;
            // case 'setAmountToBuy':
            //     state.AmountToBuy = action.payload
            //     break;
            // case 'setPrice':
            //     state.Price = action.payload
            //     break;
            // case 'setFinalPrice':
            //     state.FinalPrice = action.payload
            //     break;
            default:
                return state
                // break;
        }
    }, CartState
)

export default CartReducer