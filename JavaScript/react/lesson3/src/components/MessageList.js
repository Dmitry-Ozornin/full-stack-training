import PropTypes from "prop-types";

export default function Message({ text, time, author }) {
  return (
    <>
      <h2>author {author}</h2>
      <p>{text}</p>
      <p>{time}</p>
    </>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  tetx: PropTypes.number.isRequired,
  
};