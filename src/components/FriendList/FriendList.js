import PropTypes from 'prop-types';
import { FriendsItem } from '../FriendsItem/FriendsItem';
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(item => (
        <FriendsItem key={item.id} data={item} />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
