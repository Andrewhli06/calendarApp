import React from 'react'
import '../MonthDropDownContent/MonthDropDownContent.css'

const MonthDropDownContent = ({ children, open }) => {
  return (
    <div className={`dropdown-content ${open ? "content-open" : null}`}>{children}</div>
  )
}

export default MonthDropDownContent