export const ADD_LIQUID = 'ADD_LIQUID'
export const ADD_NON_LIQUID = 'ADD_NON_LIQUID'

export const addLiquid = () => {
    return {
        type: ADD_LIQUID,
        payload: {
            name: '',
            vals: [1,2,3,4,5,6,7]
        }
    }
}

export const addNonLiquid = () => {
    return {
        type: ADD_NON_LIQUID,
        payload: {
            name: '',
            vals: [1,2,3,4,5,6,7]
        }
    }
}