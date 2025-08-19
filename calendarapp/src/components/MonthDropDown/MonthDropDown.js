import React from 'react'
import MonthDropDownButton from './MonthDropDownButton/MonthDropDownButton'
import MonthDropDownContent from './MonthDropDownContent/MonthDropDownContent'
import "../MonthDropDown/MonthDropDown.css"

const MonthDropDown = ({buttonText, content}) => {
  return (
    <div className="dropdown">
        <MonthDropDownButton>
            {buttonText}
        </MonthDropDownButton>
        <MonthDropDownContent>
            {content}
        </MonthDropDownContent>
    </div>
  )
}

export default MonthDropDown