export const setProductId = (value) => {
    return {type: 'setProductId', payload: value}
}

export const setProductName = (value) => {
    return {type: 'setProductName', payload: value}
}

export const setAmountToBuy = (value) => {
    return {type: 'setAmountToBuy', payload: value}
}

export const setPrice = (value) => {
    return {type: 'setPrice', payload: value}
}

export const setFinalPrice = (value) => {
    return {type: 'setFinalPrice', payload: value}
}

export const setCart = (value) => {
    return {type: 'setCart', payload: value}
}

export const setAmount = (value) => {
    return {type: 'setAmount', payload: value}
}

export const setAmountPlus = (value) => {
    return {type: 'setAmountPlus', payload: value}
}

export const setAmountMinus = (value) => {
    return {type: 'setAmountMinus', payload: value}
}

export const removeFromCart = (value) => {
    return {type: 'removeFromCart', payload: value}
}