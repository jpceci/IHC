import React, { useState, useEffect } from 'react';
import "./Dropdown.css";

function DropDown(props) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen]);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleDropDown} className="collapse-button">
                <span className="word1">{props.triggerText}</span>
                <span className="word2">{props.sigla}</span>
            </button>
            {isOpen && props.children}
        </div>
    );
}

export default DropDown;