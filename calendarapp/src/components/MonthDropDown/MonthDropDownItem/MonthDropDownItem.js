import React from 'react'
import '../MonthDropDownItem/MonthDropDownItem.css'

export const MonthDropDownItem = ({children, onClick}) => {
  return (
    <div className='dropdown-item' onClick={onClick}>{children}</div>
  )
}

export default MonthDropDownItem;