import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import '../YearDropDownButton/YearDropDownButton.css'

const YearDropDownButton = ({children,open,toggle}) => {
  return (
    <div onClick={toggle} className={`dropdown-btn ${open ? "button-open" : null}`}>{children}
    <span className="toggle-icon"> {open ? <FaChevronUp /> : <FaChevronDown />}</span></div>
  )
}

export default YearDropDownButton