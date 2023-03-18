import axios, { AxiosResponse } from 'axios'

const getSearch = (): Promise<AxiosResponse> => {
   return axios.get('https://api.tvmaze.com/search/shows?q=girls')
   // return axios.get('https://api.tvmaze.com/shows?q=animals')
}

export default getSearch