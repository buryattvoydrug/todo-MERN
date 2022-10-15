import Item from './Item'
import '../scss/list.scss'
import { useEffect, useState } from 'react';
import { IItem } from '../types';

export default function List() {
  const [items, setItems] = useState<IItem[] | []>([]);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
         .then(res => res.json())
         .then(res => setItems(res.reverse()))
         .catch((er) => {
          alert(er.message);
         });
  }, []);

  return (
    <>
      <div className="list-container">
        <div className="container">
          {items.map((item) => (
            <Item key={item.id} _id={String(item.id)} data={item}/>
          ))}
        </div>
      </div>
    </>
  )
}
