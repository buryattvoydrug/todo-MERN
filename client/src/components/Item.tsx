import React from 'react'
import { ItemProps } from '../types'
import '../scss/item.scss';

export default function Item({id}: ItemProps) {
  return (
    <>
      <div className="item">
        <div className="item-buttons">
          <div className="item__checkbox">
            <input type="checkbox" id={id} name={id} />
            <label  htmlFor={id}></label>
          </div>
          <button className="item__trash">
            <img src="/images/trash.png" alt="" className="item__trash__image" />
          </button>
        </div>
        {/* в item-text добавить класс cheked если cheked */}
        <div className="item-text">
          {/* в h3 добавить класс imp если важно */}
          <h3 className="item__title "><span>Пара по автоматизации бизнес процессов 16:20</span></h3>
          <p className="item__description">
            Ссылка на собрание Teams: https://teams.microsoft.com/_?tenantId=21f92996-c72d-4b9f-b5a5-283c00b9ecaa#/pre-join-calling/19:2kN5HI9pf7q6P9KlVq_Xizd-XnEFHTWkJXU_kfnXzs41@thread.tacv2
          </p>
        </div>
      </div>
    </>
  )
}
