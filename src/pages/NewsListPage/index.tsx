import React, { useEffect } from 'react'

import PageTitle from 'components/PageTitle'
import NewsList from 'components/NewsList'

import routeMain from './routes'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { loadNews } from 'store/news/actions'
import { selectList } from 'store/news/selectors' 

import './style.scss'

const NewsListPage = () => {
	const dispatch = useDispatch();
	const newsList = useSelector(selectList);

   useEffect(()=>{
		dispatch(loadNews());
   }, [dispatch])

   return (
      <div className="main__page">
         <PageTitle
            title={
               <h2>
                  Быть
                  <br />в курсе <span>событий</span>
               </h2>
            }
         />
         {newsList.length > 0 && (
            <NewsList list={newsList} />
         )}
      </div>
   )
}

export { routeMain }
export default NewsListPage
