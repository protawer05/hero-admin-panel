const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filterUses: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_ADD':
            return{
                ...state,
                heroes: [...state.heroes, action.payload]
            }
        case 'HEROES_DELETE':
            return {
                ...state,
                heroes: state.heroes.filter(item => (item.id !== action.payload))
            }
        case 'HEROES_FILTER':
            return {
                ...state,
                filters: state.heroes.filter(item => (item.element === action.payload)),
                filterUses: action.filterUses
            }
        default: return state
    }
}

export default reducer;