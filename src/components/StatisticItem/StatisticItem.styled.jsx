import styled from 'styled-components';

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  row-gap: 5px;
  padding: 10px;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`.padEnd(
      7,
      '0'
    );
  }};
`;

export const StatisticsLabel = styled.span`
  color: #fff;
`;

export const StatisticsPercentage = styled.span`
  color: #fff;
  font-size: 20px;
`;
