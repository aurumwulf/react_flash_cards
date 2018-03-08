import React from 'react';

const List = ({ cards }) => (
  <div>
    <div>
      <ul>
        {cards.map((card) => (
          <div className="card">
            {card.front}
            <br />
            <button className="btn">Flip</button>
          </div>
        ))}
      </ul>
    </div>
    <div>
      <ul>
        {cards.map((card) => (
          <div className="card">
            {card.back}
            <br />
            <button className="btn">Flip</button>
          </div>
        ))}
      </ul>
    </div>
  </div>
);

export default List;
