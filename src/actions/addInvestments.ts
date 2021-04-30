export const ADD_STOCKS = 'ADD_STOCKS'
export const ADD_REAL_ESTATE = 'ADD_REAL_ESTATE'
export const ADD_CRYPTO = 'ADD_CRYPTO'

export const addStocks = () => {
    return {
        type: ADD_STOCKS,
        payload: {
            name: '',
            vals: [1,2,3,4,5,6,7]
        }
    }
}

export const addRealEstate = () => {
    return {
        type: ADD_REAL_ESTATE,
        payload: {
            name: '',
            vals: [1,2,3,4,5,6,7]
        }
    }
}

export const addCrypto = () => {
    return {
        type: ADD_CRYPTO,
        payload: {
            name: '',
            vals: [1,2,3,4,5,6,7]
        }
    }
}