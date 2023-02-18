import PropTypes from 'prop-types';
import { StatSection,TitleText,StatList,StatItem,StatLabel,StatValue } from './Statistics.styled';

 export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      <TitleText>{title}</TitleText>
      <StatList>
            {stats.map(stat => (<StatItem key={stat.id} >
                <StatLabel>{stat.label}</StatLabel>
                <StatValue>{stat.percentage}%</StatValue>
            </StatItem>))}
        </StatList>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};


