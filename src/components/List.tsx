import Item from './Item'
import '../scss/list.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IItem } from '../types';

export default function List() {
  const [items, setItems] = useState<IItem[] | []>([]);

  useEffect(() => {
    axios.get<IItem[]>('https://jsonplaceholder.typicode.com/todos' , { timeout: 10000 })
         .then((res) => {
          setItems(res.data);
         })
         .catch((er) => {
          alert(er.message);
         });
  }, []);

  return (
    <>
      <div className="list-container">
        <div className="container">
          {items.map((item) => (
            <Item key={item.id} id={String(item.id)} data={item}/>
          ))}
        </div>
      </div>
    </>
  )
}
