const initialState={
    search:'',
    sorting:'default',
    sortingRow: null,
    loading: false
}
export const filtersReducer=(state = initialState, action)=>{
    switch(action.type){
        case 'SET_SEARCH':
            return {...state, search: action.payload}
        case 'SET_SORTING':
            return {...state, sorting: action.payload}    
        case 'SET_SORTING_ROW':
            return {...state, sortingRow: action.payload}
            case 'SET_LOADING':
                return {...state, loading: action.payload}  
        default:
            return state
    }
}