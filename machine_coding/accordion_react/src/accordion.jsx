import { useState } from 'react';
import './accordion.css';

export const AccordionContainer = (props) => {
    return (
        <div className='accordion-container'>
            {props.children}
        </div>
    )
};

AccordionContainer.Accordion = (props) => {
    const [ open, setOpen ] = useState(false);

    return (
        <div class='accordion'>
            <div className={'accordion-heading' + (open ? " active" : "")} onClick={() => setOpen(!open)}>
                {props.label}
            </div>
            {open && (
                <div className='accordion-content'>
                    {props.children}
                </div>
            )}
        </div>
    )
}
