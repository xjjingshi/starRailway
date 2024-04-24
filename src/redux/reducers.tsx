let initState = {
    count: 0
}

const countReducer = (state = initState, action:{type: string}) => {

    switch (action.type) {
        case 'add':
            return { count: state.count + 1}
        case 'sub':
            return { count: state.count - 1}
        default:
            return state 
    }
}

export default countReducer