export function getBoardTasks() {
  // return fetch('https://raw.githubusercontent.com/divineforest/shmello/master/api/tasks.json')
  //   .then(r => r.json())
  return Promise.resolve({
    tasks: [
      {
        id: 1343,
        position: 1,
        listId: 1001,
        name: "A Tec"
      },
      {
        id: 7026,
        position: 2,
        listId: 1001,
        name: "Artemis"
      },
      {
        id: 9722,
        position: 1,
        listId: 1001,
        name: "Rising Sun"
      },
      {
        id: 9297,
        position: 1,
        listId: 1602,
        name: "Rising Sun"
      },
      {
        id: 1298,
        position: 3,
        listId: 1602,
        name: "QuickUrban"
      },
      {
        id: 9298,
        position: 2,
        listId: 1602,
        name: "Highland Conservativa Brainwave Lightning"
      },
      {
        id: 9227,
        position: 4,
        listId: 1602,
        name: "Sub Altus"
      },
      {
        id: 9497,
        position: 5,
        listId: 1602,
        name: "Flex Events"
      }
    ]
  }).then(r => r.tasks);
}
