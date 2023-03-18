import { AnyAction } from "redux"

import { IStore } from "./types"

const initialState = {
	list: [],
}

const showReducer = (state : IStore = initialState, action : AnyAction) => {
	switch (action.type) {
		case 'show/setShow' :
			return {...state, list: [...action.payload]}
		default:
			return state
	}
}

export default showReducer;