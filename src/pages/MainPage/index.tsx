import React, { useEffect } from 'react'

import routeMain from './routes'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { loadNews } from 'store/news/actions'
import { selectList } from 'store/news/selectors' 

import { loadSearch } from 'store/search/actions'
import { selectSearch } from 'store/search/selectors' 

import PageTitle from 'components/PageTitle'
import NewsList from 'components/NewsList'

import './style.scss'

const MainPage = () => {
	const dispatch = useDispatch();
	const newsList = useSelector(selectList);

	const dispatchSearch = useDispatch();
	const showSearch = useSelector(selectSearch);

   useEffect(()=>{
		dispatch(loadNews());
   }, [dispatch])
   useEffect(()=>{
		dispatchSearch(loadSearch());
   }, [dispatchSearch])

	// console.log(showSearch)

   return (
      <section className="main__page"> 
         <PageTitle
            title={
               <h2>
                  Всегда
                  <br />
                  свежие <span>новости</span>
               </h2>
            }
         />
               {newsList.length > 0 && (
                  <NewsList list={newsList.slice(0, 6)} />
               )}
      </section>
   )
}

export {routeMain};
export default MainPage
