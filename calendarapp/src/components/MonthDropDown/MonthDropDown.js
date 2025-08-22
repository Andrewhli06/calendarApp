import React, { use } from 'react'
import MonthDropDownButton from './MonthDropDownButton/MonthDropDownButton'
import MonthDropDownContent from './MonthDropDownContent/MonthDropDownContent'
import "../MonthDropDown/MonthDropDown.css"
import {useState, useEffect, useRef} from 'react';

const MonthDropDown = ({buttonText, content}) => {

    const [open, setOpen] = useState(false);
    const dropDownRef = useRef();

    const toggleDropdown = () => {
        setOpen((open) => !open);
    }
    
    useEffect(() => {
        const handler = (event) => {
            if(dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        }
    }, [dropDownRef]);

  return (
    <div className="dropdown" ref={dropDownRef}>
        <MonthDropDownButton toggle={toggleDropdown} open={open}>
            {buttonText}
        </MonthDropDownButton>
        <MonthDropDownContent open={open}>
            {content}
        </MonthDropDownContent>
    </div>
    )
}

export default MonthDropDown;