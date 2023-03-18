import { Dispatch } from "redux"
import getSearch from "services/getSearch"

import { IStore } from "./types"

export const setSearchAction = (list : IStore['list']) => {
	// console.log(list)
	return {
		type: 'show/setSearch',
		payload: list,
	}
}

export const loadSearch = () => async (dispatch : Dispatch) => {
	try {
		const response = await getSearch()
		// console.log(response.data)
		dispatch(setSearchAction(response.data))

	} catch(e) {
		console.log('Error: ', e)
	}
}
