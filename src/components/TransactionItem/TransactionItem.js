import PropTypes from 'prop-types';
import {
  TransactionItemList,
  TransactionItemItems,
} from './TransactionItem.styled';

export const TransactionItem = ({ data: { type, amount, currency } }) => {
  return (
    <TransactionItemList>
      <TransactionItemItems>{type}</TransactionItemItems>
      <TransactionItemItems>{amount}</TransactionItemItems>
      <TransactionItemItems>{currency}</TransactionItemItems>
    </TransactionItemList>
  );
};

TransactionItem.propTypes = {
  data: PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
