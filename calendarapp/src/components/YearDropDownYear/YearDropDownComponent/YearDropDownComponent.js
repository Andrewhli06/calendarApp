import React from 'react'
import '../YearDropDownContent/YearDropDownContent.css'

const YearDropDownContent = ({ children, open, onSelect }) => {
  return (
    <div className={`dropdown-content ${open ? "content-open" : null}`}>{children}</div>
  )
}

export default YearDropDownContent