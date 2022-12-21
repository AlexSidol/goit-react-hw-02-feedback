import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import css from './Statistics.module.css';
const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <>
    {total ? (
      <ul className={css.box}>
        <li className={css.statistics}> Good: {good} </li>
        <li className={css.statistics}> Neutral: {neutral} </li>
        <li className={css.statistics}> Bad: {bad} </li>
        <li className={css.statistics}> Total: {total} </li>
        <li className={css.statistics}>
          Positive feedback: {positiveFeedbackPercentage}%
        </li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
