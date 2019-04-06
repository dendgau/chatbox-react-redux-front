// Define function dispatch use thunk middleware
export const dispatchThunk = (action, promiseTodo) => {
    let funcDispatch = dispatch => {
        // For first time dispatch to keep alive
        dispatch({
            type: action,
            payload: {}
        });

        // For second time dispatch to return data
        promiseTodo.then((data) => {
            dispatch({
                type: action,
                payload: data
            });
        })
    }

    return funcDispatch;
}