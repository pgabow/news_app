import axios, { AxiosResponse } from 'axios'

const getShow = (): Promise<AxiosResponse> => {
   // return axios.get('https://api.tvmaze.com/search/shows?q=girls')
   return axios.get('https://api.tvmaze.com/shows?q=animals')
}

export default getShow