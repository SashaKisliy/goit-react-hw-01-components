import PropTypes from 'prop-types';
import { FriendItem, FriendImage, FriendOnline } from './FriendsItem.styled';

export const FriendsItem = ({ data: { avatar, name, isOnline } }) => {
  return (
    <FriendItem>
      <FriendOnline online={isOnline}>{isOnline}</FriendOnline>
      <FriendImage src={avatar} alt={name} />
      <p>{name}</p>
    </FriendItem>
  );
};

FriendsItem.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
