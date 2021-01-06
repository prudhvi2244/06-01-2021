const redux=require('redux')
const createStore=redux.createStore

//Define Action Type
const BOOK_TICKET='Book_Ticket'
const BUY_BOOK='Buy_Book'

const initialState={
    noOfTickets:29,
    noOfBooks:20
}


//An action is an object with type property
let action={
    type:BOOK_TICKET
} 


//Action Creator is a function that returns an action
let bookTicket=()=>action


//Reducer will take 2 parameters , (prevState,action)=>newState
let bookTicketReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case BOOK_TICKET:
                    return {
                    noOfTickets:state.noOfTickets-1
                }
            
        default :return state
    }
}

//Create a store
let store=createStore(bookTicketReducer)
console.log('Initial State :',store.getState())

let unsusbscribe=store.subscribe(()=>{console.log('Updated  State :',store.getState())})

store.dispatch(bookTicket())
store.dispatch(bookTicket())
store.dispatch(bookTicket())
store.dispatch(bookTicket())
store.dispatch(bookTicket())
store.dispatch(bookTicket())





