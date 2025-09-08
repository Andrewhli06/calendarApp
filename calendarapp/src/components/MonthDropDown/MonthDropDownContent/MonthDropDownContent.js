import React from 'react'
import '../MonthDropDownContent/MonthDropDownContent.css'

const MonthDropDownContent = ({ children, open, onSelect }) => {
  return (
    <div className={`dropdown-content ${open ? "content-open" : null}`}>{children}</div>
  )
}

export default MonthDropDownContent