const initialState={
    users:[],
    
}

export function githubUsersApp(state=initialState,action){
    if(action.type==='GET_USERS'){
        console.log("In reducer get users")
        return(<any>Object).assign({},state,{
            users:action.payload
        })
    }
    else {
        return state
    }
}