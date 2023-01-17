import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  const elements = items.map(item => (
    <TransactionHistoryItem key={item.id} {...item} />
  ));
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
