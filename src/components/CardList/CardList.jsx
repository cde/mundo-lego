import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.figures.map((fig) => (
        <Card figure={fig} key={fig.set_num}></Card>
      ))}
    </div>
  );
};

export default CardList;
