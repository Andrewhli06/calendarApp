import React from 'react'
import '../MonthDropDownContent/MonthDropDownContent.css'

const MonthDropDownContent = ({ children }) => {
  return (
    <div className='dropdown-content'>{children}</div>
  )
}

export default MonthDropDownContent