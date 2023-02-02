import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 0 auto;
  width: 500px;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid black;
  border-radius: 0 0 4px 4px;
`;

export const TransactionHead = styled.thead``;

export const TransactionList = styled.tr``;

export const TransactionItems = styled.th`
  padding: 15px;
  font-weight: 700;
  font-size: 20px;
  color: #a70505;
  background-color: cyan;
  :not(:last-child) {
    border-right: 1px solid #fff;
  }
`;

export const TransactionBody = styled.tbody``;
