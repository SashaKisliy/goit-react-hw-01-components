import styled from 'styled-components';

export const ProfileBlock = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 300px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0 0 4px 4px;
`;

export const ProfileImage = styled.img`
  margin: 0 auto;
  width: 50%;
  height: auto;
  border-radius: 50%;
  background-color: lightgrey;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProfileList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ghostwhite;
  border-top: 1px solid lightgrey;
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  row-gap: 5px;
  padding: 20px;
  :not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;
