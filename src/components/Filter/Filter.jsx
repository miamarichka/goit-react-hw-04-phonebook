import React from "react";
import { nanoid } from 'nanoid'

export const Filter = ({filter, onChange}) => {
    const inputSearchContact = nanoid();
    
    return (
        <>
            <label
            htmlFor={inputSearchContact}
            className="contact-search__label"
        >
            Find contacts by name
            </label>
            <input
                className="contact-search__input"
                id={inputSearchContact}
                type="text"
                name="search"
                value={filter}
                onChange={onChange} />
        </>
    )
}