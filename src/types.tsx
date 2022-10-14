export interface IItem {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}
export interface IPostItem {
  userId: number,
  title: string,
  completed: boolean,
}
export type ItemProps = {
  _id: string,
  data: IItem,
}