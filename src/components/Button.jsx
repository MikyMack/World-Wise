import styles from "./Button.module.css";
import PropTypes from 'prop-types';

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
Button.propTypes = {
    children: PropTypes.node.isRequired, // 'children' should be a node (any renderable React child)
    onClick: PropTypes.func.isRequired,   // 'onClick' should be a function
    type: PropTypes.string.isRequired,    // 'type' should be a string
  };

export default Button;