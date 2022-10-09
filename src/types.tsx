export interface IItem {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}
export type ItemProps = {
  _id: string,
  data: IItem,
}