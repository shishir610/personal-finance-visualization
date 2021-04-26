import {ADD_STOCKS, ADD_REAL_ESTATE, ADD_CRYPTO} from '../actions'

let initialState = {
    stocks: [],
    realEstate: [],
    crypto: []
}

const investmentsReducer = (
    previousState = initialState,
    action: {type: string, payload: any}
    ) => {
    const {type, payload} = action
    switch(type){
        case ADD_STOCKS:
            return {
                ...previousState,
                stocks: [
                    ...previousState.stocks,
                    {
                        name: payload.name,
                        vals: payload.vals
                    }
                ]
            }
        case ADD_REAL_ESTATE:
            return {
                ...previousState,
                realEstate: [
                    ...previousState.realEstate,
                    {
                        name: payload.name,
                        vals: payload.vals
                    }
                ]
            }
        case ADD_CRYPTO:
            return {
                ...previousState,
                crypto: [
                    ...previousState.crypto,
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

export default investmentsReducer