import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux"; 
import { createSelector } from "reselect";
import { getListsForBoard } from "./actionCreators";

export default function listsHOC(Component) {

  class withLists extends React.Component {
    render() {
      return <Component {...this.props} />
    }
  }

  return compose(
    connect(mapStateToProps, dispatchToProps)
  )(withLists);
}

const mapStateToProps = state => ({
  lists: sortedListsSelector(state)
});

const dispatchToProps = dispatch => bindActionCreators({
  getListsForBoard
}, dispatch)

const listsSelector = state => state.board.lists;

const sortedListsSelector = createSelector(
  listsSelector,
  lists => lists.sort((a, b) => a.position - b.position)
)