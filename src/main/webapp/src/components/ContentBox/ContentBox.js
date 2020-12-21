import React from 'react';
import './ContentBox.css';

export default function ContentBox(props) {
  return (
    <div style={props.wrapperStyle} className="contentBoxWrapper">
      <img className="contentImage" src={props.image} alt="" />
      <div className="contentTextWrapper">
        <p className="contentText">
          {props.text}
        </p>
      </div>
    </div>
  );
}
