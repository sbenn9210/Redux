//create the redux object
const redux = require('redux')

//create the initial state
const initialState = {
  counter : 0
}

//getting a reference to the createStore function
const createStore = redux.createStore

//create the reducer
const rootReducer = (state = initialState,action) => {

  if(action.type == "INCREMENT_COUNTER") {
    //update the counter by one

    return {
      ...state,
      counter : state.counter + 1
    }
  } else if(action.type == "ADD_COUNTER") {
    // + action.age + action.movie.title + action.movie.year

    return {
      ...state,
      counter : state.counter + action.value
    }
  } else if(action.type == "DECREMENT_COUNTER") {

    return {
      ...state,
      counter : state.counter - 1
    }
  } else if(action.type == "SUBTRACT_COUNT") {

    return {
      ...state,
      counter : state.counter - action.value
    }
  }

  return state
}


const store = createStore(rootReducer)

console.log(store.getState())

// //subscriptions
// store.subscribe(() => {
//   console.log("Subscription Fired")
// })
//
// //dispatching the actions
// //increment counter so counter can be 1 more
// store.dispatch({type : "INCREMENT_COUNTER"})
//
// console.log(store.getState())

//add counter which means you can add a value to the existing ADD_COUNTER
// store.dispatch({type : "ADD_COUNTER", value : 10})

store.dispatch({type : "DECREMENT_COUNTER"})
console.log(store.getState())

store.dispatch({type : "SUBTRACT_COUNT", value : 10})
console.log(store.getState())
