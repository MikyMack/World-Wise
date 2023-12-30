import styles from "./CountryItem.module.css";
import PropTypes from 'prop-types';

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}
CountryItem.propTypes = {
  country: PropTypes.shape({
    emoji: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    // Add more prop types for other properties in your country object
  }).isRequired,
};

export default CountryItem;
