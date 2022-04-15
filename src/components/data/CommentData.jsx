import PropTypes from "prop-types";

function CommentData({ user: { id, name, email, body } }) {
  return (
    <div className="comment">
      <div className="comment-title">
        <h4 className="text-title">{name}</h4>
        <span className="text-title">{email}</span>
      </div>
      <p className="comment-body">{body}</p>
    </div>
  );
}

CommentData.propTypes = {
  user: PropTypes.object.isRequired,
};
export default CommentData;
