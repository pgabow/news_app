import React from 'react'

import prepareTitleNews from 'utils/prepareTitleNews'

import './style.scss'

interface ITitleNewsParams {
	value: string;
}

const TitleNews: React.FC<ITitleNewsParams> = ({value}) => {
   const { titleBegin, titleEnd } = prepareTitleNews(value)

   return (
      <h2 className="titleView">
         {titleBegin}{" "}
         <span className="titleSpan">{titleEnd}</span>
      </h2>
   )
}

export default TitleNews
