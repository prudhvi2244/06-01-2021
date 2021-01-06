# What is Redux? [ SAR ]
* React is a predictable state container for java script apps
* A State Management Library
* Makes Creating Complex Applications Easier
* Not Required To Create React App
* Redux is not tied to React ,But can be used with Angular , React , Vue etc
* Redux stores the state of your application
* Redux will store and manage the application state


# Summary

* React is a library used to build user interfaces
* Redux is a library for managing state in a predictable way in java script applications
* React-redux is a library that provides bindings to use React and Redux together in an application

# To Install redux use the following command

 * npm install redux

#  Three Core Concepts in Redux we should understand

* A Store that holds the state of your application
* An action that describes the changes in the state of the application
* A Reducer which actually carries out the state transition depending on the action


# Three Principles

* First Principle
    * The state of your whole application is stored in an object tree within a single store
    * Maintain our application state in a single object which would be managed by the Redux store

# Cake Shop : 
    Lets assume we are tracking the number of cakes on the shelf
         
         {
             numberOfCakes:9
         }


* Second Principle
    * The only way to change the state is to emit an action, an object describing what happened
    * To update the state of your app, you need to let redux know about that with an action
    * Not allowed to directly update the state object

# Cake Shop :
    Let the shopkeeper know about our action - BUY_CAKE
        {
            type:BUY_CAKE
        }


* Third Principle
    * To specify how the state tree is transformed by actions, you write pure Reducers
        Reducer- (previousState,action)=>newState
# Cake Shop:
    Reducer is the shopkeeper



# Actions
    * The only way your application can interact with the store
    * Carry some information from your app to the redux store
    * Plain JavaScript objects
    * Have a "type" property that indicates the type of action being performed
    * The type property typically defined as string constants

* Action Creator just creates an action
* An Action Creator is function that returns an action

# Reducers
    * Specify how the app state changes in response to actions sent to the store 
    * Function that accepts state and action as arguments , and returns the next state of the application
    * (prevState , action)=>newState

# Redux Store
    * For entire application there will be only one store
    Responsibilities
        * Holds application state
        * Allows access to state via getState()
        * Allows state to be updated via dispatch(action)
        * Registers listeners via subscribe(listener)
        * Handles unregistering of listeners via the function returned by subscibe(listener)


# Cakes & Ice Creams!
    
        * Cake Shop
        * Cake stored on the shelf
        * Shopkeeper to handle BUY_CAKE from customer
# 
        * Sell ice creams!
        * Ice Creams stored in freezer
        * New shopkeeper to handle BUY_ICECREAM from customer


# Middleware
    * Is the Suggested way to extend redux with custom functionality
    * Provides a third party extension point between dispatching an action , and the moment it reaches the reducer
    * Use middleware for logging , crash reporting , performance asynchronous tasks atc.



# Async Action Creators
    * axios
        * Requests to an end point
    * redux-thunk
        * middleware
        * Define async action creators
    