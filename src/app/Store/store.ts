import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {githubUsersApp} from '../Reducers/reducer'

export let store = createStore(githubUsersApp,applyMiddleware(thunk))

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})