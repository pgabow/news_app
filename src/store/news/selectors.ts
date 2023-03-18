import { IStore } from "./types"

export const selectList = (state : { newsReducer : IStore}) : IStore['list'] => {
	// console.log(state)
	return state.newsReducer.list
} 
