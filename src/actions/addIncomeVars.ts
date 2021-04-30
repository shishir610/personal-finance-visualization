export const ADD_MAIN = 'ADD_MAIN'
export const ADD_SIDE_HUSTLES = 'ADD_SIDE_HUSTLES'

export const addMain = () => {
    return {
        type: ADD_MAIN,
        payload: {
            name: '',
            vals: [1,2,3,4,5,6,7]
        }
    }
}

export const addSideHustles = () => {
    return {
        type: ADD_SIDE_HUSTLES,
        payload: {
            name: '',
            vals: [1,2,3,4,5,6,7]
        }
    }
}