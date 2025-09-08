import React from 'react'
import '../YearDropDownItem/YearDropDownItem.css'

export const YearDropDownItem = ({children, onClick}) => {
  return (
    <div className='dropdown-item' onClick={onClick}>{children}</div>
  )
}

export default YearDropDownItem;