import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import DateView from 'components/DateView'
import TitleNews from 'components/TitleNews'

import routeMain from './routes'
// redux
import { useSelector } from 'react-redux'
// import { loadNews } from 'store/news/actions'
import { selectList } from 'store/news/selectors'

// import getNews from 'services/getNews'

import { ID } from 'types/ID'
import { INewsDetail } from 'types/INewsDetail'

import './style.scss'

const NewsDetail = () => {
  const { id } = useParams<ID>()

  const [news, setNews] = useState<INewsDetail | undefined>(undefined)
  const newsList = useSelector(selectList)

  useEffect(() => {
    const currentNews = newsList?.find((item: INewsDetail) => item._id === id)
    setNews(currentNews)
  }, [id, newsList])

  return (
    <section className='container newsDetailPage'>
      {news ? (
        <div className='row'>
          <div className='col-4 news__detail-left'>
            <TitleNews value={news.title} />
            <p className='news__detail-sourse'>{news.clean_url}</p>
            <DateView value={news.published_date} />
          </div>
          <div className='col-8 news__detail-right'>
            <img className='news__detail-img' src={news.media} alt={news.media} />
            <p className='news__detail-summary'>{news.summary}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  )
}

export { routeMain }
export default NewsDetail
