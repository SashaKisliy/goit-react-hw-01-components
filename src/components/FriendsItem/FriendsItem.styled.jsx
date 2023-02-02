import styled from 'styled-components';

export const FriendItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  gap: 20px;
`;

export const FriendOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
`;

export const FriendImage = styled.img`
  width: 50px;
  height: 50px;
`;
