import { IItem, IPostItem } from './types';

export function postItem({userId, title, completed}:IPostItem): void {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

export function updateItem({userId, id, title, completed}:IItem): void {
  fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
    method: 'PUT',
    body: JSON.stringify({
      userId,
      id,
      title,
      completed,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

export function deleteItem(id:number): void {
  fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
    method: 'DELETE',
  });
}

