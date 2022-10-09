import '../scss/editor.scss';

export default function Editor() {

  const COLORS = ['#000000', '#FB5607', '#FFBE0B', '#8338EC', '#3A86FF'];

  return (
    <>
      <div className="wide-container">
        <div className="container">
          <div className="editor">
            <form action="">
              <div className="item-text">
                <textarea className="item__title" name="" id="" rows={2} placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe."></textarea>
                <textarea className="item__description" name="" id="" rows={5} placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aut quae corporis, sit veritatis possimus fugit mollitia magni tempore dolorum dicta veniam, eum nisi vel iusto asperiores? Nesciunt corrupti exercitationem officiis odit voluptas. Repellat, rem sequi repudiandae dolor, nihil dolorum sint voluptas nobis, nisi exercitationem neque dolores provident possimus nulla?"></textarea>
              </div>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
