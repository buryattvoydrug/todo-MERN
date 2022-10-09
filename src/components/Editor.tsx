import { useState } from 'react';
import '../scss/editor.scss';
import { postItem } from '../services';

const defaultForm = {
  userId: 777,
  title: '',
  completed: false,
}

export default function Editor() {

  const COLORS = ['#000000', '#FB5607', '#FFBE0B', '#8338EC', '#3A86FF'];
  const [active, setActive] = useState(false);

  const [form, setForm] = useState(defaultForm);

  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    setForm({
      userId: 777,
      title: event.currentTarget.value,
      completed: false,
    });
  }

  const handleSubmit = (): void => {
    if (form.title) {
      postItem(form);
      setActive(false);
      setForm(defaultForm);
    } else { alert('Форма пуста!')}
  }

  return (
    <>
      <div className="wide-container">
        <div className="container">
          <div className="editor">
            <form>
              <div className="item-text" onClick={() => setActive(true)}>
                <textarea className="item__title" name="" id="" rows={active? 2 : 1} 
                value={form.title} onChange={handleChange} 
                placeholder="Новая запись"></textarea>
                {active && <textarea className="item__description" name="" id="" rows={5} placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aut quae corporis, sit veritatis possimus fugit mollitia magni tempore dolorum dicta veniam, eum nisi vel iusto asperiores? Nesciunt corrupti exercitationem officiis odit voluptas. Repellat, rem sequi repudiandae dolor, nihil dolorum sint voluptas nobis, nisi exercitationem neque dolores provident possimus nulla?"></textarea>}
              </div>
              {/* {active && 
              <div className="item-buttons">
                <div className="item__checkbox">
                  <input id="editor" type="checkbox" />
                  <label className="checkbox-label" htmlFor="editor">
                    <span className="checkbox-label__text">Важно</span>
                  </label>
                </div>
                <div className="color-buttons">
                  {COLORS.map(color => 
                    <>
                      <input type="radio" name="color" value={color} id={color}/>
                      <label className="color__button" htmlFor={color} style={{background : color}}></label>
                    </>
                  )}
                </div>
              </div>} */}
              {!active?
              <div className="submit__editor" onClick={() => setActive(true)}>
                <strong>+</strong>
              </div>
              : 
              <div className="submit__editor" onClick={handleSubmit}>ОК</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
