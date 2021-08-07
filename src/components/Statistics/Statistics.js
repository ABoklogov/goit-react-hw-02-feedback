import PropTypes from 'prop-types';
import './Statistics.scss';
import StatisticsList from './StatisticsList';
import Notification from './Notification';

const Statistics = ({ total, ...otherProps }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <StatisticsList total={total} {...otherProps} />
      )}
    </div>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Statistics;
