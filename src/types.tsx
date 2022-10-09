export interface IItem {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}
export type ItemProps = {
  id: string,
  data: IItem,
}