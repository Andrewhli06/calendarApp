import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import '../MonthDropDownButton/MonthDropDownButton.css'

const MonthDropDownButton = ({children}) => {
  return (
    <div className='dropdown-btn'>{children}
    <span className="toggle-icon"><FaChevronDown /></span></div>
  )
}

export default MonthDropDownButton