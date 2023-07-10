import PropTypes from "prop-types";

function ContactElement({ id, name, number, onDelete }) {
  return (
    <>
      <p >{name}:</p>
      <p >{number}</p>
      <button type="button" onClick={() => onDelete(id)}>Delete</button>
    </>
  )
}

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
}


export default ContactElement;