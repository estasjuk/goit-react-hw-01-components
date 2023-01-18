import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const elements = items.map(item => (
    <TransactionHistoryItem key={item.id} {...item} />
  ));
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHead}>
        <tr>
          <th className={css.transactionHead}>Type</th>
          <th className={css.transactionHead}>Amount</th>
          <th className={css.transactionHead}>Currency</th>
        </tr>
      </thead>
      <tbody>{elements}</tbody>
    </table>
  );
};

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
