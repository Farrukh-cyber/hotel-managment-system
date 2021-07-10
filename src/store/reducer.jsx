const INITIAL_STATE = {
    
}

const reducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case "DataType":
            return({
                ...state,
                data:action.data
            })
        case "GETUSER":
            return ({
                ...state,
                user: action.user
            })
        case "GETALLUSERS":
            return ({
                ...state,
                allUsers: action.allUsers
            })
        default:
            return state
    }
}

export default reducer;