export const ADD_LIQUID = 'ADD_LIQUID'
export const ADD_NON_LIQUID = 'ADD_NON_LIQUID'

export const addLiquid = () => {
    return {
        type: ADD_LIQUID,
        payload: {
            name: '',
            vals: ['','','','','','']
        }
    }
}

export const addNonLiquid = () => {
    return {
        type: ADD_NON_LIQUID,
        payload: {
            name: '',
            vals: ['','','','','','']
        }
    }
}