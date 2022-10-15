import { IItem, ItemProps } from '../types'
import '../scss/item.scss';
import { deleteItem, updateItem } from '../services';
import { useContext, useState } from 'react';
import { EditorContext } from '../context';
import trash from '../images/trash.png';

export default function Item({_id, data}: ItemProps) {
  const {edit, setEdit} = useContext(EditorContext);


  const {userId, id, title, description, completed, important, color} = data;
  const [checked, setChecked] = useState(completed);
  const [hidden, setHidden] = useState(false);

  const handleCheck = (): void => {
    updateItem({userId, id, title, description, completed: !checked, important, color});
    setChecked(!checked);
  }

  const handleDelete = (): void => {
    deleteItem(id);
    setHidden(true);
  }

  const handleChangeContext = (): void => {
    setEdit(data);
  }

  return (
    <>
      {!hidden && <div className="item" onDoubleClick={handleChangeContext} 
      style={{borderRight: "8px solid" + color}}>
        <div className="item-buttons">
          <div className="item__checkbox">
            <input type="checkbox" id={_id} name={_id} checked={checked} onChange={handleCheck}/>
            <label  htmlFor={_id}></label>
          </div>
          {checked? <button className="item__trash" onClick={handleDelete}>
            <img src={trash} alt="" className="item__trash__image" />
          </button>: ''}
        </div>
        <div className={checked ? "item-text checked" : "item-text"}>
          <h3 className={important? "item__title imp" : "item__title"}><span>{title}</span></h3>
          <p className="item__description">{description}</p>
        </div>
      </div>}
    </>
  )
}
