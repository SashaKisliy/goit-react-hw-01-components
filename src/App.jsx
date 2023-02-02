import React from 'react';
import { GlobalStyle } from 'components/GlobalStyles/GlobalStyles';
import { Profile } from './components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        gap: 40,
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" statisticItems={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </div>
  );
};
