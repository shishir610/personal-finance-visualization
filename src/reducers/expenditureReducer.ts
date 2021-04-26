import {ADD_REGULAR, ADD_MISC} from '../actions'

let initialState = {
    regular: [],
    miscellaneous: []
}

const expenditureReducer = (
    previousState = initialState,
    action: {type: string, payload: any}
    ) => {
    const {type, payload} = action
    switch(type){
        case ADD_REGULAR:
            return {
                ...previousState,
                regular: [
                    ...previousState.regular,
                    {
                        name: payload.name,
                        vals: payload.vals
                    }
                ]
            }
        case ADD_MISC:
            return {
                ...previousState,
                miscellaneous: [
                    ...previousState.miscellaneous,
                    {
                        name: payload.name,
                        vals: payload.vals
                    }
                ]
            }
        default: 
            return previousState
    }
}

export default expenditureReducer