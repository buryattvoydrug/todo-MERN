export interface IItem {
  userId: number,
  id: number,
  title: string,
  description: string,
  completed: boolean,
  important: boolean,
  color: string,
}
export interface IPostItem {
  userId: number,
  title: string,
  description: string,
  completed: boolean,
  important: boolean,
  color: string,
}
export type ItemProps = {
  _id: string,
  data: IItem,
}