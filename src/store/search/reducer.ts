import { AnyAction } from "redux"

import { IStore } from "./types"

const initialState = {
	list: [],
}

const searchReducer = (state : IStore = initialState, action : AnyAction) => {
	switch (action.type) {
		case 'show/setSearch' :
			return {...state, list: [...action.payload]}
		default:
			return state
	}
}

export default searchReducer;