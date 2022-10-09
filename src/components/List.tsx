import Item from './Item'
import '../scss/list.scss'

export default function List() {
  return (
    <>
      <div className="list-container">
        <div className="container">
          <Item id={'1'}/>
          <Item id={'2'}/>
          <Item id={'3'}/>
          <Item id={'41'}/>
          <Item id={'12'}/>
          <Item id={'23'}/>
          <Item id={'34'}/>
          <Item id={'45'}/>
          <Item id={'16'}/>
          <Item id={'27'}/>
          <Item id={'38'}/>
          <Item id={'49'}/>
        </div>
      </div>
    </>
  )
}
