import PropTypes from 'prop-types';
import css from './StatItem.module.css';
import { setRandomColor } from '../../../utils/setRandomColor';

export const StatItem = ({ label, percentage }) => {
  return (
    <li
      className={css.item}
      style={{
        backgroundColor: setRandomColor(),
      }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
