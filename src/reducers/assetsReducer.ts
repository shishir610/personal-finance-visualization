import {ADD_LIQUID, ADD_NON_LIQUID} from '../actions'

let initialState = {
    liquid: [],
    nonLiquid: []
}

const assetsReducer = (
    previousState = initialState,
    action: {type: string, payload: any}
    ) => {
    const {type, payload} = action
    switch(type){
        case ADD_LIQUID:
            return {
                ...previousState,
                liquid: [
                    ...previousState.liquid,
                    {
                        name: payload.name,
                        vals: payload.vals
                    }
                ]
            }
        case ADD_NON_LIQUID:
            return {
                ...previousState,
                nonLiquid: [
                    ...previousState.nonLiquid,
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

export default assetsReducer