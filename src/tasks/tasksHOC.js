import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux"; 
import { createSelector } from "reselect";
import { getTasks, moveTask, startEditTask, endEditTask } from "./actionCreators";

export default function listsHOC(Component) {

  class withTasks extends React.Component {
    render() {
      return <Component {...this.props} />
    }
  }

  return compose(
    connect(mapStateToProps, dispatchToProps)
  )(withTasks);
}

const mapStateToProps = state => ({
  groupedTask: groupedAndSortTaskSelector(state),
  editedTask: editedTaskSelector(state)
});

const dispatchToProps = dispatch => bindActionCreators({
  getTasks,
  moveTask,
  startEditTask,
  endEditTask
}, dispatch)

const tasksSelector = state => state.tasks.list;

const groupedTaskSelector = createSelector(
  tasksSelector,
  tasks => tasks.reduce((resulst, current) => {
    if(!resulst[current.listId]) {
      resulst[current.listId] = [];
    }
    return { 
      ...resulst,
      [current.listId]: resulst[current.listId].concat(current)
    }
  }, {})
)

const groupedAndSortTaskSelector = createSelector(
  groupedTaskSelector,
  tasks => Object.keys(tasks).reduce((resulst, currentKey) => ({
    ...resulst,
    [currentKey]: tasks[currentKey].sort((a, b) =>  a.position - b.position)
  }) , {})
)

const editedTaskIdSelector = state => state.tasks.editedTask;

const editedTaskSelector = createSelector(
  tasksSelector,
  editedTaskIdSelector,
  (tasks, id) => tasks.find((t) => t.id === id)
)