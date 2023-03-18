import React from 'react'
import './style.scss'

interface IPageTitleParams {
	title: JSX.Element | string;
}

const PageTitle: React.FC<IPageTitleParams> = ({title}) => {
   return (
      <div className="container">
         <div className="row">
            <div className="page-title">
               {title}
            </div>
         </div>
      </div>
   )
}

export default PageTitle
