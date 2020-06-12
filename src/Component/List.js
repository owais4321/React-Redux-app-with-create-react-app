import React from 'react';

const List = (props) => (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span
            onClick={() => props.toggle && props.toggleTodo(item.id)}
            style={{
              textDecoration: item.complete ? "line-through" : "none",
            }}
          >
            {item.name}
          </span>
          <button onClick={() => props.removeItem(item)}>X</button>
        </li>
      ))}
    </ul>
  );
  export default List