const redux=require('redux')
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require('redux-thunk').default
const axios=require('axios')


const createStore=redux.createStore

const intialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_USERS_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
        errror: "",
      };
    }
    case FETCH_USERS_FAILURE: {
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    }
  }
};


const fetchUsers=()=>
{
    return function(dispatch)
    {
        let URI='https://jsonplaceholder1.typicode.com/users'
        dispatch(fetchUsersRequest())
        axios.get(URI).then((response)=>{
            const users=response.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
        }).catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store=createStore(reducer,applyMiddleware(thunkMiddleware))

store.subscribe(()=>{console.log(store.getState())})

store.dispatch(fetchUsers())




