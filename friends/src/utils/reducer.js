import { FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, ADD_FRIEND } from './actions'


const intitialState = {
    friends: [],
    isLoading: false,
    error: ""
}


export const reducer = (state = intitialState, action) => {
        switch (action.type) {
            case FETCH_FRIENDS_START:
                return {
                    ...state,
                    isLoading: true,
                }
            case FETCH_FRIENDS_SUCCESS:
                return{
                    ...state,
                    friends: action.payload,
                    isLoading: false,
                }
                case ADD_FRIEND:
                    return{
                        ...state,
                        friends: [...state.friends, action.payload]
                    }
                default:
                    return state
        }
    }