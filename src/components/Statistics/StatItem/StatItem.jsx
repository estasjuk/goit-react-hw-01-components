import PropTypes from 'prop-types';

export const StatItem = ({ label, percentage }) => {
  return (
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
};

StatItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
