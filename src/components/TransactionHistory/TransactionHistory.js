import PropTypes from 'prop-types';
import { TransactionItem } from '../TransactionItem/TransactionItem';
import {
  TransactionTable,
  TransactionHead,
  TransactionList,
  TransactionItems,
  TransactionBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TransactionHead>
        <TransactionList>
          <TransactionItems>Type</TransactionItems>
          <TransactionItems>Amount</TransactionItems>
          <TransactionItems>Currency</TransactionItems>
        </TransactionList>
      </TransactionHead>

      <TransactionBody>
        {transactions.map(item => (
          <TransactionItem key={item.id} data={item} />
        ))}
      </TransactionBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
