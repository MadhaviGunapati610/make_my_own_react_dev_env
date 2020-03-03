const courseReducer = (state = [], action) => {
    switch(action.type){
        case "CREATE_COURSE": return [
            ...state,
            {...action.state}
        ];
        default: return state;
    }
}

export default courseReducer;

// with default export in the reducer we name it whatever we want when required. 