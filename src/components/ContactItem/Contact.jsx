import React from "react";

export const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className="contact-list__item" id={id}>
      {name}: {number}
      <button
        type="button"
        className="contact-list__btn"
        onClick={()=>{onDeleteContact(name)}}
      >
        Delete
      </button>
    </li>
  );
};