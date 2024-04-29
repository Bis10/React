import React from 'react';
import './css/card.css';

const Card = ({name,likes, addLikes, removeCard, removeLikescj}) => {
  return (
    <div className='card'>
        <h2>{name}</h2>
        <img src={`https://source.unsplash.com/400x400/?${name}`} />
        <button onClick={removeLikes}>
          <span className="material-symbols-outlined">heart_minus</span>
        </button>
        <p>{likes}</p>
        <button onClick={removeCard}>
          <span className="material-symbols-outlined">cancel</span>
        </button>
        <button onClick={addLikes}>
          <span className="material-symbols-outlined">heart_plus</span>
        </button>
       
        </div>
  );
};

export default Card;