import PropTypes from "prop-types"

export const listPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired
})
