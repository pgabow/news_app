import React from "react";

import prepareDate from "utils/prepareDate";

import './style.scss'

interface IDateViewParams {
	value: string;
}

const DateView: React.FC<IDateViewParams> = ({value}) => {

   const { day, month } = prepareDate(value)

   return (
      <div className="dateView">
         <span className="day">{day}</span>&nbsp;/&nbsp;
         <span className="month">{month}</span>
      </div>
   )
}

export default DateView