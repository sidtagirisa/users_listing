import React from 'react';
import './Info.scss';

export default function Info(props: {
  heading: string;
  value: string | JSX.Element;
  description?: string;
}): JSX.Element {
  return (
    <div className="information">
      <h4 className="heading">{props.heading}</h4>
      <p className="value">{props.value}</p>
      {props.description ? (
        <p className="description">{`${props.description}`}</p>
      ) : (
        <></>
      )}
    </div>
  );
}
