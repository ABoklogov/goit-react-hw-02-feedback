import PropTypes from 'prop-types';

const StatisticsList = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className="statistics-list">
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive feedback: {total === 0 ? 0 : positivePercentage}%</p>
      </li>
    </ul>
  );
};

StatisticsList.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default StatisticsList;
