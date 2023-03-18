import { IStore } from "./types"

export const selectSearch = (state : { searchReducer : IStore}) : IStore['list'] => {
	// console.log(state)
	return state.searchReducer.list
} 
