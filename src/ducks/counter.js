// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

var initialState = {
    counter: 0,
    futureValues: [],
    previousValues: []
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const REDO = "REDO";
const UNDO = "UNDO";

export function increment(amnt){
    return {
        type: INCREMENT,
        payload: amnt
    }
}

export function decrement(amnt){
    return {
        type: DECREMENT,
        payload: amnt
    }
}
export function redo(){
    return {
        type: REDO,
    }
}
export function undo(){
    return {
        type: UNDO,
    }
}


// 'state = initialState' -- if passed null or undefined, pass in initialState instead...///
function counter(state = initialState, action){
    state = Object.assign(state, { 
        lastAction: action 
    })
    switch(action.type){
       case INCREMENT:
        return Object.assign({}, state, {
            counter: state.counter + action.payload,
            previousValues: [state.counter, ...state.previousValues]
        })
       case DECREMENT:
        return Object.assign({}, state, {
            counter: state.counter - action.payload,
            previousValues: [state.counter, ...state.previousValues]
        })
       case REDO:
        return Object.assign({}, state, {
            
        })
    }
}


export default counter