import {createStore} from 'redux';

const initialState = {
    app1: {message: 'Welcome to APP1.'}
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'APP1_UPDATE_MESSAGE':
            console.log('APP1_UPDATE_MESSAGE=' + action.payload)
            return {...state, app1: {...state.app1, message: action.payload}};
        default:
            return state;
    }
}

export const storeInstance = createStore(reducer);
