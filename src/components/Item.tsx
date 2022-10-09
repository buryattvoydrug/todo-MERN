import { ItemProps } from '../types'
import '../scss/item.scss';
import { deleteItem, updateItem } from '../services';
import { useState } from 'react';

export default function Item({_id, data}: ItemProps) {
  const {userId, id, title, completed} = data;
  const [checked, setChecked] = useState(completed);
  const [hidden, setHidden] = useState(false);

  const handleCheck = (): void => {
    updateItem({userId, id, title, completed: !checked});
    setChecked(!checked);
  }

  const handleDelete = (): void => {
    deleteItem(id);
    setHidden(true);
  }

  return (
    <>
      {!hidden && <div className="item">
        <div className="item-buttons">
          <div className="item__checkbox">
            <input type="checkbox" id={_id} name={_id} checked={checked} onChange={handleCheck}/>
            <label  htmlFor={_id}></label>
          </div>
          <button className="item__trash" onClick={handleDelete}>
            <img src="/images/trash.png" alt="" className="item__trash__image" />
          </button>
        </div>
        <div className={checked ? "item-text checked" : "item-text"}>
          {/* в h3 добавить класс imp если пемечено как важное*/}
          <h3 className={id % 5? "item__title" : "item__title imp"}><span>{title}</span></h3>
          <p className="item__description">
            Lorem ipsum {id} dolor sit amet consectetur adipisicing elit. Doloremque sapiente incidunt quod perferendis, sunt reprehenderit atque nulla aspernatur debitis quos aperiam, ad, magni eos repellat. Eligendi debitis, repellat voluptas laborum deserunt, aperiam officia facilis ex obcaecati cupiditate officiis rerum quibusdam!
          </p>
        </div>
      </div>}
    </>
  )
}
