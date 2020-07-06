import React from 'react';
import './Card.css';

const Card = ({ figure }) => {
  let imgUrl = figure.set_img_url;

  if (imgUrl === null) {
    imgUrl = 'https://rebrickable.com/static/img/nil_mf.jpg?size=180x180';
  }
  return (
    <div className='card-container'>
      <img alt='figurs' src={`${imgUrl}?size=180x180`} />
      <h2> {figure.name} </h2>
    </div>
  );
};

export default Card;
