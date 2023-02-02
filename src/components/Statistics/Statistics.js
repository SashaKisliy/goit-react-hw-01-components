import PropTypes from 'prop-types';
import { StatisticItem } from '../StatisticItem/StatisticItem';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
} from './Statistics.styled';

export const Statistics = ({ title, statisticItems }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {statisticItems.map(item => (
          <StatisticItem key={item.id} data={item} />
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statisticItems: PropTypes.array.isRequired,
};
