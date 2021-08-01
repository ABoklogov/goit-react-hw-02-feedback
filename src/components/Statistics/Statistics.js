const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h1>Statistics</h1>
      <ul>
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
          <p>Positive feedback: {total === 0 ? 0 : positivePercentage}</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
