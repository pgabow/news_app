import React from "react";

import { NavLink } from 'react-router-dom'
import { routeMain as routeNewsDetail } from 'pages/NewsDetail'

import DateView from "components/DateView";

import { INewsDetail } from "types/INewsDetail";

import './style.scss'

interface INewsItemParams {
	item: INewsDetail;
}

const NewsItem: React.FC<INewsItemParams> = ({item}) => {
   return (
      <NavLink className="col-4 news-item" to={routeNewsDetail(item._id)}>
         <div className="news-item__title">{item.title}</div>
         <div className="news-item__wrapp">
            <div className="news-item__sourse">
               {item.clean_url}&nbsp;&nbsp;
            </div>
            <DateView value={item.published_date} />
         </div>
      </NavLink>
   )
}

export default NewsItem