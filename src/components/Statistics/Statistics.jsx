import PropTypes from 'prop-types';
import { StatItem } from './StatItem/StatItem';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const elements = stats.map(stat => <StatItem key={stat.id} {...stat} />);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>{elements}</ul>
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
