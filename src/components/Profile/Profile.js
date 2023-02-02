import PropTypes from 'prop-types';

import {
  ProfileBlock,
  ProfileImage,
  ProfileDescription,
  ProfileList,
  ProfileItem,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileBlock>
      <ProfileDescription>
        <ProfileImage src={avatar} alt={username} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </ProfileDescription>

      <ProfileList>
        <ProfileItem>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </ProfileItem>
        <ProfileItem>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </ProfileItem>
        <ProfileItem>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </ProfileItem>
      </ProfileList>
    </ProfileBlock>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
