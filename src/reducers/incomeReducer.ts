import {ADD_MAIN, ADD_SIDE_HUSTLES} from '../actions'

let initialState = {
    main: [],
    sideHustles: []
}

const incomeReducer = (
    previousState = initialState,
    action: {type: string, payload: any}
    ) => {
    const {type, payload} = action
    switch(type){
        case ADD_MAIN:
            return {
                ...previousState,
                main: [
                    ...previousState.main,
                    {
                        name: payload.name,
                        vals: payload.vals
                    }
                ]
            }
        case ADD_SIDE_HUSTLES:
            return {
                ...previousState,
                sideHustles: [
                    ...previousState.sideHustles,
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

export default incomeReducer