import React, { use } from 'react'
import YearDropDownButton from './YearDropDownButton/YearDropDownButton'
import YearDropDownContent from './YearDropDownContent/YearDropDownContent'
import "../YearDropDown/YearDropDown.css"
import {useState, useEffect, useRef} from 'react';

const YearDropDown = ({buttonText, content}) => {

    const [open, setOpen] = useState(false);
    const dropDownRef = useRef();
    const buttonRef = useRef();
    const contentRef = useRef();

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
        <YearDropDownButton ref={buttonRef} toggle={toggleDropdown} open={open}>
            {buttonText}
        </YearDropDownButton>
        <YearDropDownContent ref={contentRef} open={open}>
            {content}
        </YearDropDownContent>
    </div>
    )
}

export default YearDropDown;