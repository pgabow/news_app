import { Dispatch } from "redux"
import getNews from "services/getNews"

import { IStore } from "./types"

export const setNewsAction = (list : IStore['list']) => {
	// console.log(list)
	return {
		type: 'news/setNews',
		payload: list,
	}
}

export const loadNews = () => async (dispatch : Dispatch) => {
	try {
		const response = await getNews()
		// console.log(response.data)
		dispatch(setNewsAction(response.data.articles))

	} catch(e) {
		console.log('Error: ', e)
	}
}
