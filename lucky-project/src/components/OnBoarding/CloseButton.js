import React from 'react';
import { Link } from 'react-router-dom'
import closeButton from "../../assets/icons_svg/cerrar.svg";

export default function CloseButton() {
  return (
    <div className="btn-close-container">
      <div className="correct-margin"></div>
      <Link to='/home' id="btn-close" className="btn-close">
        <img clasName="btn-close" src={closeButton} />
      </Link>
    </div>
  );
}
