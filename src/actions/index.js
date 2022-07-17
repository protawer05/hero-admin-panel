export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}
export const heroesAdd = (newHero) => {
    return {
        type: 'HEROES_ADD',
        payload: newHero
    }
}
export const heroesDelete = (uuid) => {
    return {
        type: 'HEROES_DELETE',
        payload: uuid
    }
}

export const addHeroesFilter = (filter, filterUses) => {
    return {
        type: 'HEROES_FILTER',
        payload: filter,
        filterUses 
    }
}