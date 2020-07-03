import React from 'react';

const ListItem = (props) => {
  return (
    <li>
      <p>{props.data.method}</p>
      <p> {props.data.url} </p>
    </li>
  );
};

export default ListItem;