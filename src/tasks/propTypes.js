import PropTypes from "prop-types"

export const taskPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  listId: PropTypes.number.isRequired,
})
