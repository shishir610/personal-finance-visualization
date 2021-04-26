export const ADD_MAIN = 'ADD_MAIN'
export const ADD_SIDE_HUSTLES = 'ADD_SIDE_HUSTLES'

export const addMain = () => {
    return {
        type: ADD_MAIN,
        payload: {
            name: '',
            vals: ['','','','','','']
        }
    }
}

export const addSideHustles = () => {
    return {
        type: ADD_SIDE_HUSTLES,
        payload: {
            name: '',
            vals: ['','','','','','']
        }
    }
}