import React from "react";

import NewsItem from "./componets/NewsItem";

import { INewsDetail } from "types/INewsDetail";

interface INewsListParams {
	list : INewsDetail[];
}

const NewsList: React.FC<INewsListParams> = ({list}) => {
   return (
      <div className="container news-wrapp">
         <div className="row">
               {list.map((news: INewsDetail) => (
                  <NewsItem key={news._id} item={news} />
               ))}
         </div>
      </div>
   )
}

export default NewsList