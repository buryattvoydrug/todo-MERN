import { ItemProps } from '../types'
import '../scss/item.scss';

export default function Item({id, data}: ItemProps) {
  return (
    <>
      <div className="item">
        <div className="item-buttons">
          <div className="item__checkbox">
            <input type="checkbox" id={id} name={id} checked={data.completed}/>
            <label  htmlFor={id}></label>
          </div>
          <button className="item__trash">
            <img src="/images/trash.png" alt="" className="item__trash__image" />
          </button>
        </div>
        <div className={data.completed ? "item-text checked" : "item-text"}>
          {/* в h3 добавить класс imp если пемечено как важное*/}
          <h3 className={data.id % 5? "item__title" : "item__title imp"}><span>{data.title}</span></h3>
          <p className="item__description">
            Lorem ipsum {data.id} dolor sit amet consectetur adipisicing elit. Doloremque sapiente incidunt quod perferendis, sunt reprehenderit atque nulla aspernatur debitis quos aperiam, ad, magni eos repellat. Eligendi debitis, repellat voluptas laborum deserunt, aperiam officia facilis ex obcaecati cupiditate officiis rerum quibusdam!
          </p>
        </div>
      </div>
    </>
  )
}
