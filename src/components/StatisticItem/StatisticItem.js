import PropTypes from 'prop-types';
import {
  StatisticsListItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './StatisticItem.styled';

export const StatisticItem = ({ data: { label, percentage } }) => {
  return (
    <StatisticsListItem>
      <StatisticsLabel>{label}</StatisticsLabel>
      <StatisticsPercentage>{percentage}%</StatisticsPercentage>
    </StatisticsListItem>
  );
};

StatisticItem.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
