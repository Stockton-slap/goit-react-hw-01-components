import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.transactionInfo}>
          <th className={css.transactionInfoItem}>Type</th>
          <th className={css.transactionInfoItem}>Amount</th>
          <th className={css.transactionInfoItem}>Currency</th>
        </tr>
      </thead>

      {items.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id} className={css.transactionDetails}>
            <tr>
              <td className={css.transactionDetailsItem}>{type}</td>
              <td className={css.transactionDetailsItem}>{amount}</td>
              <td className={css.transactionDetailsItem}>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
