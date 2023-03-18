import { IStore } from "./types"

export const selectShow = (state : { showReducer : IStore}) : IStore['list'] => {
	// console.log(state)
	return state.showReducer.list
} 
