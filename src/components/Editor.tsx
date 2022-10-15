import { useContext, useEffect, useState } from 'react';
import { EditorContext } from '../context';
import '../scss/editor.scss';
import { postItem, updateItem } from '../services';
import { IItem } from '../types';

const defaultEdit = {
  id: 0,
  userId: 777,
  title: '',
  description: '',
  completed: false,
  important: false,
  color: '#fff',
}
  const COLORS = ['#000000', '#FB5607', '#FFBE0B', '#8338EC', '#3A86FF'];

export default function Editor() {
  const [active, setActive] = useState(false);
  const [form, setForm] = useState<IItem>(defaultEdit);

  const {edit, setEdit} = useContext(EditorContext);

  useEffect(() => {
    if (edit !== null) {
      setActive(true);
      setForm(edit);
    }
  }, [edit]);


  const handleTextAreaChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    setForm((prevState) => {
      return {
        ...prevState,
        id: prevState.id || 0,
        title: (name === "title" && value) || prevState.title,
        description: (name === "description" && value) || prevState.description,
      }
    });
  }

  const handleCheckboxChange = (event: React.FormEvent<HTMLInputElement>): void => {
    let value = event.currentTarget.checked;
    setForm((prevState) => {
      return {
        ...prevState,
        important: value,
      }
    });
  }

  const handleColorChange = (event: React.FormEvent<HTMLInputElement>): void => {
    let value = event.currentTarget.value;
    setForm((prevState) => {
      return {
        ...prevState,
        color: value || prevState.color,
      }
    });
  }



  const handleSubmit = (): void => {
    if (!form.title) alert('Форма пуста!')
    if (edit) {
      updateItem(form);
    }
    else {
      postItem({
        userId: form.userId,
        title: form.title,
        description: form.description,
        completed: form.completed,
        important: form.important,
        color: form.color,
      });
      setActive(false);
      setForm(defaultEdit);
    }
  }

  const handleHide = (): void => {
    setActive(false); 
    setEdit(null);
    setForm(defaultEdit);
  }

  return (
    <>
      <div className="wide-container">
        <div className="container">
          <div className="editor">
            <form>
              <div className="item-text" onClick={() => setActive(true)}>
                <textarea className="item__title" name="title" id="" rows={active? 2 : 1} 
                value={form.title} onChange={handleTextAreaChange} 
                placeholder="Новая запись"></textarea>
                {active && <textarea className="item__description" name="description" id="" rows={5} 
                value={form.description} onChange={handleTextAreaChange} placeholder="Описание"></textarea>}
              </div>
              {active && 
              <div className="item-buttons">
                <div className="item__checkbox">
                  <input id="editor" type="checkbox" name="important" onChange={handleCheckboxChange} 
                  checked={form.important}/>
                  <label className="checkbox-label" htmlFor="editor">
                    <span className="checkbox-label__text">Важно</span>
                  </label>
                </div>
                <div className="color-buttons">
                  {COLORS.map(color => 
                    <>
                      <input type="radio" name="color" key={color} id={color} value={color} checked={form.color === color}
                                                                    onChange={handleColorChange}/>
                      <label key={color + 's'} className="color__button" htmlFor={color} style={{background : color}}>
                      </label></>
                  )}
                </div>
              </div>}
              {!active?
              <div className="submit__editor" onClick={() => setActive(true)}>
                <strong>+</strong>
              </div>
              : 
              <div className="submit__editor" onClick={handleSubmit}>ОК</div>
              }
            </form>
          </div>
        </div>
      </div>
      {active && <div className="hide__button" onClick={handleHide}></div>}
    </>
  )
}
