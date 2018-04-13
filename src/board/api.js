export function getBoardLists(){
  return fetch('https://raw.githubusercontent.com/divineforest/shmello/master/api/lists.json')
    .then(r => r.json())
    .then(r => r.lists);
}
