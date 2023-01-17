import PropTypes from 'prop-types';
import { StatItem } from './StatItem/StatItem';

export const Statistics = ({ title, stats }) => {
  const elements = stats.map(stat => <StatItem key={stat.id} {...stat} />);
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">{elements}</ul>
    </section>
  );
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
