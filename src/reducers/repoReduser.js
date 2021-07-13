const SET_REPOS= "ADD_COUNTER"
const SET_FETCHING= "SET_FETCHING"
const SET_PAGE= "SET_PAGE"
const IS_ERROR= "IS_ERROR"


const defaultState={
    items:[],
    isFetching:false,
    currentPage:1,
    perPage:10,
    totalAmount:0,
    isFetchingError:false

}

export default function  repoReducer  (state = defaultState, action){
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                totalAmount:action.payload.total_count,
                isFetching: false
            }
        case SET_FETCHING:{
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case SET_PAGE:{
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case IS_ERROR:{
            return {
                ...state,
                isFetchingError: action.payload
            }
        }
        default:

            return state
    }
}

export const setRepos=(repos)=>( {type:SET_REPOS, payload:repos})
export const setFetch=(bool)=>( {type:SET_FETCHING, payload:bool})
export const setCurrentPage=(item)=>( {type:SET_PAGE, payload:item})
export const setFetchError=(bool)=>( {type:IS_ERROR, payload:bool})
